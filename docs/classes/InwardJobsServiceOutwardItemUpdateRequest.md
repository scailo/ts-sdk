[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsServiceOutwardItemUpdateRequest

# Class: InwardJobsServiceOutwardItemUpdateRequest

Describes the parameters required to update an outward item in a inward job

**`Generated`**

from message Scailo.InwardJobsServiceOutwardItemUpdateRequest

## Hierarchy

- `Message`\<[`InwardJobsServiceOutwardItemUpdateRequest`](InwardJobsServiceOutwardItemUpdateRequest.md)\>

  ↳ **`InwardJobsServiceOutwardItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobsServiceOutwardItemUpdateRequest.md#constructor)

### Properties

- [clientFamilyCode](InwardJobsServiceOutwardItemUpdateRequest.md#clientfamilycode)
- [clientQuantity](InwardJobsServiceOutwardItemUpdateRequest.md#clientquantity)
- [clientUomId](InwardJobsServiceOutwardItemUpdateRequest.md#clientuomid)
- [deliveryDate](InwardJobsServiceOutwardItemUpdateRequest.md#deliverydate)
- [id](InwardJobsServiceOutwardItemUpdateRequest.md#id)
- [internalQuantity](InwardJobsServiceOutwardItemUpdateRequest.md#internalquantity)
- [specifications](InwardJobsServiceOutwardItemUpdateRequest.md#specifications)
- [userComment](InwardJobsServiceOutwardItemUpdateRequest.md#usercomment)
- [fields](InwardJobsServiceOutwardItemUpdateRequest.md#fields)
- [runtime](InwardJobsServiceOutwardItemUpdateRequest.md#runtime)
- [typeName](InwardJobsServiceOutwardItemUpdateRequest.md#typename)

### Methods

- [clone](InwardJobsServiceOutwardItemUpdateRequest.md#clone)
- [equals](InwardJobsServiceOutwardItemUpdateRequest.md#equals)
- [fromBinary](InwardJobsServiceOutwardItemUpdateRequest.md#frombinary)
- [fromJson](InwardJobsServiceOutwardItemUpdateRequest.md#fromjson)
- [fromJsonString](InwardJobsServiceOutwardItemUpdateRequest.md#fromjsonstring)
- [getType](InwardJobsServiceOutwardItemUpdateRequest.md#gettype)
- [toBinary](InwardJobsServiceOutwardItemUpdateRequest.md#tobinary)
- [toJSON](InwardJobsServiceOutwardItemUpdateRequest.md#tojson)
- [toJson](InwardJobsServiceOutwardItemUpdateRequest.md#tojson-1)
- [toJsonString](InwardJobsServiceOutwardItemUpdateRequest.md#tojsonstring)
- [equals](InwardJobsServiceOutwardItemUpdateRequest.md#equals-1)
- [fromBinary](InwardJobsServiceOutwardItemUpdateRequest.md#frombinary-1)
- [fromJson](InwardJobsServiceOutwardItemUpdateRequest.md#fromjson-1)
- [fromJsonString](InwardJobsServiceOutwardItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsServiceOutwardItemUpdateRequest**(`data?`): [`InwardJobsServiceOutwardItemUpdateRequest`](InwardJobsServiceOutwardItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsServiceOutwardItemUpdateRequest`](InwardJobsServiceOutwardItemUpdateRequest.md)\> |

#### Returns

[`InwardJobsServiceOutwardItemUpdateRequest`](InwardJobsServiceOutwardItemUpdateRequest.md)

#### Overrides

Message\&lt;InwardJobsServiceOutwardItemUpdateRequest\&gt;.constructor

#### Defined in

src/inward_jobs.scailo_pb.ts:2845

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 15;

#### Defined in

src/inward_jobs.scailo_pb.ts:2829

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being ordered in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

src/inward_jobs.scailo_pb.ts:2822

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

src/inward_jobs.scailo_pb.ts:2815

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 16;

#### Defined in

src/inward_jobs.scailo_pb.ts:2836

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/inward_jobs.scailo_pb.ts:2801

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being ordered in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/inward_jobs.scailo_pb.ts:2808

___

### specifications

• **specifications**: `string` = `""`

Any extra specifications with regards to the item

**`Generated`**

from field: string specifications = 17;

#### Defined in

src/inward_jobs.scailo_pb.ts:2843

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/inward_jobs.scailo_pb.ts:2794

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs.scailo_pb.ts:2852

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs.scailo_pb.ts:2850

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsServiceOutwardItemUpdateRequest"``

#### Defined in

src/inward_jobs.scailo_pb.ts:2851

## Methods

### clone

▸ **clone**(): [`InwardJobsServiceOutwardItemUpdateRequest`](InwardJobsServiceOutwardItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`InwardJobsServiceOutwardItemUpdateRequest`](InwardJobsServiceOutwardItemUpdateRequest.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`InwardJobsServiceOutwardItemUpdateRequest`](InwardJobsServiceOutwardItemUpdateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceOutwardItemUpdateRequest`](InwardJobsServiceOutwardItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`InwardJobsServiceOutwardItemUpdateRequest`](InwardJobsServiceOutwardItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsServiceOutwardItemUpdateRequest`](InwardJobsServiceOutwardItemUpdateRequest.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`InwardJobsServiceOutwardItemUpdateRequest`](InwardJobsServiceOutwardItemUpdateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceOutwardItemUpdateRequest`](InwardJobsServiceOutwardItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`InwardJobsServiceOutwardItemUpdateRequest`](InwardJobsServiceOutwardItemUpdateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceOutwardItemUpdateRequest`](InwardJobsServiceOutwardItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs.scailo_pb.ts:2875

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsServiceOutwardItemUpdateRequest`](InwardJobsServiceOutwardItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsServiceOutwardItemUpdateRequest`](InwardJobsServiceOutwardItemUpdateRequest.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2863

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsServiceOutwardItemUpdateRequest`](InwardJobsServiceOutwardItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceOutwardItemUpdateRequest`](InwardJobsServiceOutwardItemUpdateRequest.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2867

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsServiceOutwardItemUpdateRequest`](InwardJobsServiceOutwardItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceOutwardItemUpdateRequest`](InwardJobsServiceOutwardItemUpdateRequest.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2871
