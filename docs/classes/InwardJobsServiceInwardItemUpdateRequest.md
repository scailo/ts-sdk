[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsServiceInwardItemUpdateRequest

# Class: InwardJobsServiceInwardItemUpdateRequest

Describes the parameters required to update an inward item in a inward job

**`Generated`**

from message Scailo.InwardJobsServiceInwardItemUpdateRequest

## Hierarchy

- `Message`\<[`InwardJobsServiceInwardItemUpdateRequest`](InwardJobsServiceInwardItemUpdateRequest.md)\>

  ↳ **`InwardJobsServiceInwardItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobsServiceInwardItemUpdateRequest.md#constructor)

### Properties

- [clientFamilyCode](InwardJobsServiceInwardItemUpdateRequest.md#clientfamilycode)
- [clientQuantity](InwardJobsServiceInwardItemUpdateRequest.md#clientquantity)
- [clientUomId](InwardJobsServiceInwardItemUpdateRequest.md#clientuomid)
- [id](InwardJobsServiceInwardItemUpdateRequest.md#id)
- [internalQuantity](InwardJobsServiceInwardItemUpdateRequest.md#internalquantity)
- [specifications](InwardJobsServiceInwardItemUpdateRequest.md#specifications)
- [userComment](InwardJobsServiceInwardItemUpdateRequest.md#usercomment)
- [fields](InwardJobsServiceInwardItemUpdateRequest.md#fields)
- [runtime](InwardJobsServiceInwardItemUpdateRequest.md#runtime)
- [typeName](InwardJobsServiceInwardItemUpdateRequest.md#typename)

### Methods

- [clone](InwardJobsServiceInwardItemUpdateRequest.md#clone)
- [equals](InwardJobsServiceInwardItemUpdateRequest.md#equals)
- [fromBinary](InwardJobsServiceInwardItemUpdateRequest.md#frombinary)
- [fromJson](InwardJobsServiceInwardItemUpdateRequest.md#fromjson)
- [fromJsonString](InwardJobsServiceInwardItemUpdateRequest.md#fromjsonstring)
- [getType](InwardJobsServiceInwardItemUpdateRequest.md#gettype)
- [toBinary](InwardJobsServiceInwardItemUpdateRequest.md#tobinary)
- [toJSON](InwardJobsServiceInwardItemUpdateRequest.md#tojson)
- [toJson](InwardJobsServiceInwardItemUpdateRequest.md#tojson-1)
- [toJsonString](InwardJobsServiceInwardItemUpdateRequest.md#tojsonstring)
- [equals](InwardJobsServiceInwardItemUpdateRequest.md#equals-1)
- [fromBinary](InwardJobsServiceInwardItemUpdateRequest.md#frombinary-1)
- [fromJson](InwardJobsServiceInwardItemUpdateRequest.md#fromjson-1)
- [fromJsonString](InwardJobsServiceInwardItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsServiceInwardItemUpdateRequest**(`data?`): [`InwardJobsServiceInwardItemUpdateRequest`](InwardJobsServiceInwardItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsServiceInwardItemUpdateRequest`](InwardJobsServiceInwardItemUpdateRequest.md)\> |

#### Returns

[`InwardJobsServiceInwardItemUpdateRequest`](InwardJobsServiceInwardItemUpdateRequest.md)

#### Overrides

Message\&lt;InwardJobsServiceInwardItemUpdateRequest\&gt;.constructor

#### Defined in

[src/inward_jobs.scailo_pb.ts:1178](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1178)

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 15;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1169](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1169)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being ordered in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1162](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1162)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1155](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1155)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1141](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1141)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being ordered in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1148](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1148)

___

### specifications

• **specifications**: `string` = `""`

Any extra specifications with regards to the item

**`Generated`**

from field: string specifications = 16;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1176](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1176)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/inward_jobs.scailo_pb.ts:1134](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1134)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs.scailo_pb.ts:1185](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1185)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs.scailo_pb.ts:1183](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1183)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsServiceInwardItemUpdateRequest"``

#### Defined in

[src/inward_jobs.scailo_pb.ts:1184](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1184)

## Methods

### clone

▸ **clone**(): [`InwardJobsServiceInwardItemUpdateRequest`](InwardJobsServiceInwardItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`InwardJobsServiceInwardItemUpdateRequest`](InwardJobsServiceInwardItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsServiceInwardItemUpdateRequest`](InwardJobsServiceInwardItemUpdateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceInwardItemUpdateRequest`](InwardJobsServiceInwardItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsServiceInwardItemUpdateRequest`](InwardJobsServiceInwardItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsServiceInwardItemUpdateRequest`](InwardJobsServiceInwardItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobsServiceInwardItemUpdateRequest`](InwardJobsServiceInwardItemUpdateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceInwardItemUpdateRequest`](InwardJobsServiceInwardItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`InwardJobsServiceInwardItemUpdateRequest`](InwardJobsServiceInwardItemUpdateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceInwardItemUpdateRequest`](InwardJobsServiceInwardItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs.scailo_pb.ts:1207](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1207)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsServiceInwardItemUpdateRequest`](InwardJobsServiceInwardItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsServiceInwardItemUpdateRequest`](InwardJobsServiceInwardItemUpdateRequest.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:1195](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1195)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsServiceInwardItemUpdateRequest`](InwardJobsServiceInwardItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceInwardItemUpdateRequest`](InwardJobsServiceInwardItemUpdateRequest.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:1199](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1199)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsServiceInwardItemUpdateRequest`](InwardJobsServiceInwardItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceInwardItemUpdateRequest`](InwardJobsServiceInwardItemUpdateRequest.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:1203](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L1203)
