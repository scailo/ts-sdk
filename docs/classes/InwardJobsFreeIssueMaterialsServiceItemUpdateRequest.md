[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsFreeIssueMaterialsServiceItemUpdateRequest

# Class: InwardJobsFreeIssueMaterialsServiceItemUpdateRequest

Describes the parameters required to update an item in a inward job free issue material

**`Generated`**

from message Scailo.InwardJobsFreeIssueMaterialsServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`InwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)\>

  ↳ **`InwardJobsFreeIssueMaterialsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#constructor)

### Properties

- [clientFamilyCode](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#clientfamilycode)
- [clientQuantity](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#clientquantity)
- [clientUomId](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#clientuomid)
- [id](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#id)
- [internalQuantity](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#internalquantity)
- [userComment](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#usercomment)
- [fields](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#fields)
- [runtime](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#runtime)
- [typeName](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#clone)
- [equals](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#equals)
- [fromBinary](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#frombinary)
- [fromJson](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#gettype)
- [toBinary](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#tobinary)
- [toJSON](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#tojson)
- [toJson](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#tojsonstring)
- [equals](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsFreeIssueMaterialsServiceItemUpdateRequest**(`data?`): [`InwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;InwardJobsFreeIssueMaterialsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:727

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as defined by the client

**`Generated`**

from field: string client_family_code = 16;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:725

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being received in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:718

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:711

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:697

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being received in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:704

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:690

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:734

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:732

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsFreeIssueMaterialsServiceItemUpdateRequest"``

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:733

## Methods

### clone

▸ **clone**(): [`InwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`InwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`InwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:755

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:743

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:747

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceItemUpdateRequest`](InwardJobsFreeIssueMaterialsServiceItemUpdateRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:751
