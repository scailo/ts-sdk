[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobContact

# Class: OutwardJobContact

Describes the parameters that constitute a outward job contact

**`Generated`**

from message Scailo.OutwardJobContact

## Hierarchy

- `Message`\<[`OutwardJobContact`](OutwardJobContact.md)\>

  ↳ **`OutwardJobContact`**

## Table of contents

### Constructors

- [constructor](OutwardJobContact.md#constructor)

### Properties

- [approvalMetadata](OutwardJobContact.md#approvalmetadata)
- [associateId](OutwardJobContact.md#associateid)
- [associateUuid](OutwardJobContact.md#associateuuid)
- [entityUuid](OutwardJobContact.md#entityuuid)
- [metadata](OutwardJobContact.md#metadata)
- [needApproval](OutwardJobContact.md#needapproval)
- [outwardJobId](OutwardJobContact.md#outwardjobid)
- [userComment](OutwardJobContact.md#usercomment)
- [fields](OutwardJobContact.md#fields)
- [runtime](OutwardJobContact.md#runtime)
- [typeName](OutwardJobContact.md#typename)

### Methods

- [clone](OutwardJobContact.md#clone)
- [equals](OutwardJobContact.md#equals)
- [fromBinary](OutwardJobContact.md#frombinary)
- [fromJson](OutwardJobContact.md#fromjson)
- [fromJsonString](OutwardJobContact.md#fromjsonstring)
- [getType](OutwardJobContact.md#gettype)
- [toBinary](OutwardJobContact.md#tobinary)
- [toJSON](OutwardJobContact.md#tojson)
- [toJson](OutwardJobContact.md#tojson-1)
- [toJsonString](OutwardJobContact.md#tojsonstring)
- [equals](OutwardJobContact.md#equals-1)
- [fromBinary](OutwardJobContact.md#frombinary-1)
- [fromJson](OutwardJobContact.md#fromjson-1)
- [fromJsonString](OutwardJobContact.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobContact**(`data?`): [`OutwardJobContact`](OutwardJobContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobContact`](OutwardJobContact.md)\> |

#### Returns

[`OutwardJobContact`](OutwardJobContact.md)

#### Overrides

Message\&lt;OutwardJobContact\&gt;.constructor

#### Defined in

[src/outward_jobs.scailo_pb.ts:3279](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3279)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/outward_jobs.scailo_pb.ts:3242](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3242)

___

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

Stores the associate ID

**`Generated`**

from field: uint64 associate_id = 11;

#### Defined in

[src/outward_jobs.scailo_pb.ts:3270](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3270)

___

### associateUuid

• **associateUuid**: `string` = `""`

Stores the UUID of the associate

**`Generated`**

from field: string associate_uuid = 211;

#### Defined in

[src/outward_jobs.scailo_pb.ts:3277](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3277)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/outward_jobs.scailo_pb.ts:3228](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3228)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this outward job

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/outward_jobs.scailo_pb.ts:3235](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3235)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/outward_jobs.scailo_pb.ts:3249](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3249)

___

### outwardJobId

• **outwardJobId**: `bigint` = `protoInt64.zero`

Stores the outward job ID

**`Generated`**

from field: uint64 outward_job_id = 10;

#### Defined in

[src/outward_jobs.scailo_pb.ts:3263](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3263)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/outward_jobs.scailo_pb.ts:3256](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3256)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs.scailo_pb.ts:3286](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3286)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs.scailo_pb.ts:3284](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3284)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobContact"``

#### Defined in

[src/outward_jobs.scailo_pb.ts:3285](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3285)

## Methods

### clone

▸ **clone**(): [`OutwardJobContact`](OutwardJobContact.md)

Create a deep copy.

#### Returns

[`OutwardJobContact`](OutwardJobContact.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobContact`](OutwardJobContact.md) \| `PlainMessage`\<[`OutwardJobContact`](OutwardJobContact.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobContact`](OutwardJobContact.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobContact`](OutwardJobContact.md)\>

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
| `a` | `undefined` \| [`OutwardJobContact`](OutwardJobContact.md) \| `PlainMessage`\<[`OutwardJobContact`](OutwardJobContact.md)\> |
| `b` | `undefined` \| [`OutwardJobContact`](OutwardJobContact.md) \| `PlainMessage`\<[`OutwardJobContact`](OutwardJobContact.md)\> |

#### Returns

`boolean`

#### Defined in

[src/outward_jobs.scailo_pb.ts:3309](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3309)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobContact`](OutwardJobContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobContact`](OutwardJobContact.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:3297](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3297)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobContact`](OutwardJobContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobContact`](OutwardJobContact.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:3301](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3301)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobContact`](OutwardJobContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobContact`](OutwardJobContact.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:3305](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L3305)
