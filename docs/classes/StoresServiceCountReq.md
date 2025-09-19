[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StoresServiceCountReq

# Class: StoresServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.StoresServiceCountReq

## Hierarchy

- `Message`\<[`StoresServiceCountReq`](StoresServiceCountReq.md)\>

  ↳ **`StoresServiceCountReq`**

## Table of contents

### Constructors

- [constructor](StoresServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](StoresServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](StoresServiceCountReq.md#approvedonend)
- [approvedOnStart](StoresServiceCountReq.md#approvedonstart)
- [approverRoleId](StoresServiceCountReq.md#approverroleid)
- [code](StoresServiceCountReq.md#code)
- [creationTimestampEnd](StoresServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](StoresServiceCountReq.md#creationtimestampstart)
- [entityUuid](StoresServiceCountReq.md#entityuuid)
- [isActive](StoresServiceCountReq.md#isactive)
- [locationId](StoresServiceCountReq.md#locationid)
- [modificationTimestampEnd](StoresServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](StoresServiceCountReq.md#modificationtimestampstart)
- [name](StoresServiceCountReq.md#name)
- [status](StoresServiceCountReq.md#status)
- [fields](StoresServiceCountReq.md#fields)
- [runtime](StoresServiceCountReq.md#runtime)
- [typeName](StoresServiceCountReq.md#typename)

### Methods

- [clone](StoresServiceCountReq.md#clone)
- [equals](StoresServiceCountReq.md#equals)
- [fromBinary](StoresServiceCountReq.md#frombinary)
- [fromJson](StoresServiceCountReq.md#fromjson)
- [fromJsonString](StoresServiceCountReq.md#fromjsonstring)
- [getType](StoresServiceCountReq.md#gettype)
- [toBinary](StoresServiceCountReq.md#tobinary)
- [toJSON](StoresServiceCountReq.md#tojson)
- [toJson](StoresServiceCountReq.md#tojson-1)
- [toJsonString](StoresServiceCountReq.md#tojsonstring)
- [equals](StoresServiceCountReq.md#equals-1)
- [fromBinary](StoresServiceCountReq.md#frombinary-1)
- [fromJson](StoresServiceCountReq.md#fromjson-1)
- [fromJsonString](StoresServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StoresServiceCountReq**(`data?`): [`StoresServiceCountReq`](StoresServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StoresServiceCountReq`](StoresServiceCountReq.md)\> |

#### Returns

[`StoresServiceCountReq`](StoresServiceCountReq.md)

#### Overrides

Message\&lt;StoresServiceCountReq\&gt;.constructor

#### Defined in

[src/stores.scailo_pb.ts:876](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L876)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/stores.scailo_pb.ts:846](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L846)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/stores.scailo_pb.ts:839](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L839)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/stores.scailo_pb.ts:832](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L832)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/stores.scailo_pb.ts:853](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L853)

___

### code

• **code**: `string` = `""`

The unique code by which the store is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/stores.scailo_pb.ts:867](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L867)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/stores.scailo_pb.ts:797](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L797)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/stores.scailo_pb.ts:790](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L790)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/stores.scailo_pb.ts:818](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L818)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/stores.scailo_pb.ts:783](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L783)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the associated location

**`Generated`**

from field: uint64 location_id = 22;

#### Defined in

[src/stores.scailo_pb.ts:874](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L874)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/stores.scailo_pb.ts:811](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L811)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/stores.scailo_pb.ts:804](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L804)

___

### name

• **name**: `string` = `""`

The name of the store

**`Generated`**

from field: string name = 20;

#### Defined in

[src/stores.scailo_pb.ts:860](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L860)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this store

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/stores.scailo_pb.ts:825](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L825)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stores.scailo_pb.ts:883](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L883)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stores.scailo_pb.ts:881](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L881)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoresServiceCountReq"``

#### Defined in

[src/stores.scailo_pb.ts:882](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L882)

## Methods

### clone

▸ **clone**(): [`StoresServiceCountReq`](StoresServiceCountReq.md)

Create a deep copy.

#### Returns

[`StoresServiceCountReq`](StoresServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StoresServiceCountReq`](StoresServiceCountReq.md) \| `PlainMessage`\<[`StoresServiceCountReq`](StoresServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`StoresServiceCountReq`](StoresServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StoresServiceCountReq`](StoresServiceCountReq.md)\>

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
| `a` | `undefined` \| [`StoresServiceCountReq`](StoresServiceCountReq.md) \| `PlainMessage`\<[`StoresServiceCountReq`](StoresServiceCountReq.md)\> |
| `b` | `undefined` \| [`StoresServiceCountReq`](StoresServiceCountReq.md) \| `PlainMessage`\<[`StoresServiceCountReq`](StoresServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stores.scailo_pb.ts:912](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L912)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StoresServiceCountReq`](StoresServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StoresServiceCountReq`](StoresServiceCountReq.md)

#### Defined in

[src/stores.scailo_pb.ts:900](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L900)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StoresServiceCountReq`](StoresServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresServiceCountReq`](StoresServiceCountReq.md)

#### Defined in

[src/stores.scailo_pb.ts:904](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L904)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StoresServiceCountReq`](StoresServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresServiceCountReq`](StoresServiceCountReq.md)

#### Defined in

[src/stores.scailo_pb.ts:908](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L908)
