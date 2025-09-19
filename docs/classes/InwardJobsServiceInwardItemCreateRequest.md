[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsServiceInwardItemCreateRequest

# Class: InwardJobsServiceInwardItemCreateRequest

Describes the parameters required to add an inward item to a inward job

**`Generated`**

from message Scailo.InwardJobsServiceInwardItemCreateRequest

## Hierarchy

- `Message`\<[`InwardJobsServiceInwardItemCreateRequest`](InwardJobsServiceInwardItemCreateRequest.md)\>

  ↳ **`InwardJobsServiceInwardItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobsServiceInwardItemCreateRequest.md#constructor)

### Properties

- [clientFamilyCode](InwardJobsServiceInwardItemCreateRequest.md#clientfamilycode)
- [clientQuantity](InwardJobsServiceInwardItemCreateRequest.md#clientquantity)
- [clientUomId](InwardJobsServiceInwardItemCreateRequest.md#clientuomid)
- [familyId](InwardJobsServiceInwardItemCreateRequest.md#familyid)
- [internalQuantity](InwardJobsServiceInwardItemCreateRequest.md#internalquantity)
- [inwardJobId](InwardJobsServiceInwardItemCreateRequest.md#inwardjobid)
- [specifications](InwardJobsServiceInwardItemCreateRequest.md#specifications)
- [userComment](InwardJobsServiceInwardItemCreateRequest.md#usercomment)
- [fields](InwardJobsServiceInwardItemCreateRequest.md#fields)
- [runtime](InwardJobsServiceInwardItemCreateRequest.md#runtime)
- [typeName](InwardJobsServiceInwardItemCreateRequest.md#typename)

### Methods

- [clone](InwardJobsServiceInwardItemCreateRequest.md#clone)
- [equals](InwardJobsServiceInwardItemCreateRequest.md#equals)
- [fromBinary](InwardJobsServiceInwardItemCreateRequest.md#frombinary)
- [fromJson](InwardJobsServiceInwardItemCreateRequest.md#fromjson)
- [fromJsonString](InwardJobsServiceInwardItemCreateRequest.md#fromjsonstring)
- [getType](InwardJobsServiceInwardItemCreateRequest.md#gettype)
- [toBinary](InwardJobsServiceInwardItemCreateRequest.md#tobinary)
- [toJSON](InwardJobsServiceInwardItemCreateRequest.md#tojson)
- [toJson](InwardJobsServiceInwardItemCreateRequest.md#tojson-1)
- [toJsonString](InwardJobsServiceInwardItemCreateRequest.md#tojsonstring)
- [equals](InwardJobsServiceInwardItemCreateRequest.md#equals-1)
- [fromBinary](InwardJobsServiceInwardItemCreateRequest.md#frombinary-1)
- [fromJson](InwardJobsServiceInwardItemCreateRequest.md#fromjson-1)
- [fromJsonString](InwardJobsServiceInwardItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsServiceInwardItemCreateRequest**(`data?`): [`InwardJobsServiceInwardItemCreateRequest`](InwardJobsServiceInwardItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsServiceInwardItemCreateRequest`](InwardJobsServiceInwardItemCreateRequest.md)\> |

#### Returns

[`InwardJobsServiceInwardItemCreateRequest`](InwardJobsServiceInwardItemCreateRequest.md)

#### Overrides

Message\&lt;InwardJobsServiceInwardItemCreateRequest\&gt;.constructor

#### Defined in

[src/inward_jobs.scailo_pb.ts:947](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L947)

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 15;

#### Defined in

[src/inward_jobs.scailo_pb.ts:938](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L938)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being ordered in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

[src/inward_jobs.scailo_pb.ts:931](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L931)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

[src/inward_jobs.scailo_pb.ts:924](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L924)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/inward_jobs.scailo_pb.ts:910](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L910)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being ordered in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/inward_jobs.scailo_pb.ts:917](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L917)

___

### inwardJobId

• **inwardJobId**: `bigint` = `protoInt64.zero`

Stores the inward job ID

**`Generated`**

from field: uint64 inward_job_id = 10;

#### Defined in

[src/inward_jobs.scailo_pb.ts:903](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L903)

___

### specifications

• **specifications**: `string` = `""`

Any extra specifications with regards to the item

**`Generated`**

from field: string specifications = 16;

#### Defined in

[src/inward_jobs.scailo_pb.ts:945](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L945)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/inward_jobs.scailo_pb.ts:896](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L896)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs.scailo_pb.ts:954](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L954)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs.scailo_pb.ts:952](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L952)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsServiceInwardItemCreateRequest"``

#### Defined in

[src/inward_jobs.scailo_pb.ts:953](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L953)

## Methods

### clone

▸ **clone**(): [`InwardJobsServiceInwardItemCreateRequest`](InwardJobsServiceInwardItemCreateRequest.md)

Create a deep copy.

#### Returns

[`InwardJobsServiceInwardItemCreateRequest`](InwardJobsServiceInwardItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsServiceInwardItemCreateRequest`](InwardJobsServiceInwardItemCreateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceInwardItemCreateRequest`](InwardJobsServiceInwardItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsServiceInwardItemCreateRequest`](InwardJobsServiceInwardItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsServiceInwardItemCreateRequest`](InwardJobsServiceInwardItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobsServiceInwardItemCreateRequest`](InwardJobsServiceInwardItemCreateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceInwardItemCreateRequest`](InwardJobsServiceInwardItemCreateRequest.md)\> |
| `b` | `undefined` \| [`InwardJobsServiceInwardItemCreateRequest`](InwardJobsServiceInwardItemCreateRequest.md) \| `PlainMessage`\<[`InwardJobsServiceInwardItemCreateRequest`](InwardJobsServiceInwardItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs.scailo_pb.ts:977](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L977)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsServiceInwardItemCreateRequest`](InwardJobsServiceInwardItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsServiceInwardItemCreateRequest`](InwardJobsServiceInwardItemCreateRequest.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:965](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L965)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsServiceInwardItemCreateRequest`](InwardJobsServiceInwardItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceInwardItemCreateRequest`](InwardJobsServiceInwardItemCreateRequest.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:969](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L969)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsServiceInwardItemCreateRequest`](InwardJobsServiceInwardItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceInwardItemCreateRequest`](InwardJobsServiceInwardItemCreateRequest.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:973](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L973)
