[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsServiceOutwardItemCreateRequest

# Class: InwardJobsServiceOutwardItemCreateRequest

Describes the parameters required to add an outward item to a inward job

**`Generated`**

from message Scailo.InwardJobsServiceOutwardItemCreateRequest

## Hierarchy

- `Message`\<[`InwardJobsServiceOutwardItemCreateRequest`](InwardJobsServiceOutwardItemCreateRequest.md)\>

  ↳ **`InwardJobsServiceOutwardItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobsServiceOutwardItemCreateRequest.md#constructor)

### Properties

- [clientFamilyCode](InwardJobsServiceOutwardItemCreateRequest.md#clientfamilycode)
- [clientQuantity](InwardJobsServiceOutwardItemCreateRequest.md#clientquantity)
- [clientUomId](InwardJobsServiceOutwardItemCreateRequest.md#clientuomid)
- [deliveryDate](InwardJobsServiceOutwardItemCreateRequest.md#deliverydate)
- [familyId](InwardJobsServiceOutwardItemCreateRequest.md#familyid)
- [internalQuantity](InwardJobsServiceOutwardItemCreateRequest.md#internalquantity)
- [inwardJobId](InwardJobsServiceOutwardItemCreateRequest.md#inwardjobid)
- [specifications](InwardJobsServiceOutwardItemCreateRequest.md#specifications)
- [userComment](InwardJobsServiceOutwardItemCreateRequest.md#usercomment)
- [fields](InwardJobsServiceOutwardItemCreateRequest.md#fields)
- [runtime](InwardJobsServiceOutwardItemCreateRequest.md#runtime)
- [typeName](InwardJobsServiceOutwardItemCreateRequest.md#typename)

### Methods

- [clone](InwardJobsServiceOutwardItemCreateRequest.md#clone)
- [equals](InwardJobsServiceOutwardItemCreateRequest.md#equals)
- [fromBinary](InwardJobsServiceOutwardItemCreateRequest.md#frombinary)
- [fromJson](InwardJobsServiceOutwardItemCreateRequest.md#fromjson)
- [fromJsonString](InwardJobsServiceOutwardItemCreateRequest.md#fromjsonstring)
- [getType](InwardJobsServiceOutwardItemCreateRequest.md#gettype)
- [toBinary](InwardJobsServiceOutwardItemCreateRequest.md#tobinary)
- [toJSON](InwardJobsServiceOutwardItemCreateRequest.md#tojson)
- [toJson](InwardJobsServiceOutwardItemCreateRequest.md#tojson-1)
- [toJsonString](InwardJobsServiceOutwardItemCreateRequest.md#tojsonstring)
- [equals](InwardJobsServiceOutwardItemCreateRequest.md#equals-1)
- [fromBinary](InwardJobsServiceOutwardItemCreateRequest.md#frombinary-1)
- [fromJson](InwardJobsServiceOutwardItemCreateRequest.md#fromjson-1)
- [fromJsonString](InwardJobsServiceOutwardItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsServiceOutwardItemCreateRequest**(`data?`): [`InwardJobsServiceOutwardItemCreateRequest`](InwardJobsServiceOutwardItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsServiceOutwardItemCreateRequest`](InwardJobsServiceOutwardItemCreateRequest.md)\> |

#### Returns

[`InwardJobsServiceOutwardItemCreateRequest`](InwardJobsServiceOutwardItemCreateRequest.md)

#### Overrides

Message\&lt;InwardJobsServiceOutwardItemCreateRequest\&gt;.constructor

#### Defined in

src/inward_jobs.scailo_pb.ts:2570

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 15;

#### Defined in

src/inward_jobs.scailo_pb.ts:2554

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being ordered in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

src/inward_jobs.scailo_pb.ts:2547

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

src/inward_jobs.scailo_pb.ts:2540

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 16;

#### Defined in

src/inward_jobs.scailo_pb.ts:2561

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/inward_jobs.scailo_pb.ts:2526

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being ordered in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/inward_jobs.scailo_pb.ts:2533

___

### inwardJobId

• **inwardJobId**: `bigint` = `protoInt64.zero`

Stores the inward job ID

**`Generated`**

from field: uint64 inward_job_id = 10;

#### Defined in

src/inward_jobs.scailo_pb.ts:2519

___

### specifications

• **specifications**: `string` = `""`

Any extra specifications with regards to the item

**`Generated`**

from field: string specifications = 17;

#### Defined in

src/inward_jobs.scailo_pb.ts:2568

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/inward_jobs.scailo_pb.ts:2512

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs.scailo_pb.ts:2577

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs.scailo_pb.ts:2575

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsServiceOutwardItemCreateRequest"``

#### Defined in

src/inward_jobs.scailo_pb.ts:2576

## Methods

### clone

▸ **clone**(): [`InwardJobsServiceOutwardItemCreateRequest`](InwardJobsServiceOutwardItemCreateRequest.md)

Create a deep copy.

#### Returns

[`InwardJobsServiceOutwardItemCreateRequest`](InwardJobsServiceOutwardItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsServiceOutwardItemCreateRequest`](InwardJobsServiceOutwardItemCreateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceOutwardItemCreateRequest`](InwardJobsServiceOutwardItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsServiceOutwardItemCreateRequest`](InwardJobsServiceOutwardItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsServiceOutwardItemCreateRequest`](InwardJobsServiceOutwardItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobsServiceOutwardItemCreateRequest`](InwardJobsServiceOutwardItemCreateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceOutwardItemCreateRequest`](InwardJobsServiceOutwardItemCreateRequest.md)\> |
| `b` | `undefined` \| [`InwardJobsServiceOutwardItemCreateRequest`](InwardJobsServiceOutwardItemCreateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceOutwardItemCreateRequest`](InwardJobsServiceOutwardItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs.scailo_pb.ts:2601

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsServiceOutwardItemCreateRequest`](InwardJobsServiceOutwardItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsServiceOutwardItemCreateRequest`](InwardJobsServiceOutwardItemCreateRequest.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2589

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsServiceOutwardItemCreateRequest`](InwardJobsServiceOutwardItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceOutwardItemCreateRequest`](InwardJobsServiceOutwardItemCreateRequest.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2593

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsServiceOutwardItemCreateRequest`](InwardJobsServiceOutwardItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceOutwardItemCreateRequest`](InwardJobsServiceOutwardItemCreateRequest.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2597
