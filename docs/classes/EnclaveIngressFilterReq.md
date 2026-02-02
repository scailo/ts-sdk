[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EnclaveIngressFilterReq

# Class: EnclaveIngressFilterReq

Describes the base request payload of a filter search for enclave runs

**`Generated`**

from message Scailo.EnclaveIngressFilterReq

## Hierarchy

- `Message`\<[`EnclaveIngressFilterReq`](EnclaveIngressFilterReq.md)\>

  ↳ **`EnclaveIngressFilterReq`**

## Table of contents

### Constructors

- [constructor](EnclaveIngressFilterReq.md#constructor)

### Properties

- [count](EnclaveIngressFilterReq.md#count)
- [creationTimestampEnd](EnclaveIngressFilterReq.md#creationtimestampend)
- [creationTimestampStart](EnclaveIngressFilterReq.md#creationtimestampstart)
- [isActive](EnclaveIngressFilterReq.md#isactive)
- [modificationTimestampEnd](EnclaveIngressFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](EnclaveIngressFilterReq.md#modificationtimestampstart)
- [offset](EnclaveIngressFilterReq.md#offset)
- [runnerRoleId](EnclaveIngressFilterReq.md#runnerroleid)
- [runnerUserId](EnclaveIngressFilterReq.md#runneruserid)
- [vaultFileUuid](EnclaveIngressFilterReq.md#vaultfileuuid)
- [vaultFileVersionUuid](EnclaveIngressFilterReq.md#vaultfileversionuuid)
- [fields](EnclaveIngressFilterReq.md#fields)
- [runtime](EnclaveIngressFilterReq.md#runtime)
- [typeName](EnclaveIngressFilterReq.md#typename)

### Methods

- [clone](EnclaveIngressFilterReq.md#clone)
- [equals](EnclaveIngressFilterReq.md#equals)
- [fromBinary](EnclaveIngressFilterReq.md#frombinary)
- [fromJson](EnclaveIngressFilterReq.md#fromjson)
- [fromJsonString](EnclaveIngressFilterReq.md#fromjsonstring)
- [getType](EnclaveIngressFilterReq.md#gettype)
- [toBinary](EnclaveIngressFilterReq.md#tobinary)
- [toJSON](EnclaveIngressFilterReq.md#tojson)
- [toJson](EnclaveIngressFilterReq.md#tojson-1)
- [toJsonString](EnclaveIngressFilterReq.md#tojsonstring)
- [equals](EnclaveIngressFilterReq.md#equals-1)
- [fromBinary](EnclaveIngressFilterReq.md#frombinary-1)
- [fromJson](EnclaveIngressFilterReq.md#fromjson-1)
- [fromJsonString](EnclaveIngressFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EnclaveIngressFilterReq**(`data?`): [`EnclaveIngressFilterReq`](EnclaveIngressFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EnclaveIngressFilterReq`](EnclaveIngressFilterReq.md)\> |

#### Returns

[`EnclaveIngressFilterReq`](EnclaveIngressFilterReq.md)

#### Overrides

Message\&lt;EnclaveIngressFilterReq\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:1645](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/vault_commons.scailo_pb.ts#L1645)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/vault_commons.scailo_pb.ts:1573](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/vault_commons.scailo_pb.ts#L1573)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/vault_commons.scailo_pb.ts:1599](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/vault_commons.scailo_pb.ts#L1599)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/vault_commons.scailo_pb.ts:1592](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/vault_commons.scailo_pb.ts#L1592)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:1566](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/vault_commons.scailo_pb.ts#L1566)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/vault_commons.scailo_pb.ts:1613](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/vault_commons.scailo_pb.ts#L1613)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/vault_commons.scailo_pb.ts:1606](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/vault_commons.scailo_pb.ts#L1606)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

// The sort order that is to be used to fetch the pagination response
SORT_ORDER sort_order = 4;
// The sort key that is to be used to fetch the pagination response
VAULT_SORT_KEY sort_key = 5;

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/vault_commons.scailo_pb.ts:1585](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/vault_commons.scailo_pb.ts#L1585)

___

### runnerRoleId

• **runnerRoleId**: `bigint` = `protoInt64.zero`

Stores the ID of the user when this enclave was executed

**`Generated`**

from field: uint64 runner_role_id = 31;

#### Defined in

[src/vault_commons.scailo_pb.ts:1643](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/vault_commons.scailo_pb.ts#L1643)

___

### runnerUserId

• **runnerUserId**: `bigint` = `protoInt64.zero`

Stores the ID of the user who executed this enclave

**`Generated`**

from field: uint64 runner_user_id = 30;

#### Defined in

[src/vault_commons.scailo_pb.ts:1636](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/vault_commons.scailo_pb.ts#L1636)

___

### vaultFileUuid

• **vaultFileUuid**: `string` = `""`

The UUID of the file

**`Generated`**

from field: string vault_file_uuid = 20;

#### Defined in

[src/vault_commons.scailo_pb.ts:1620](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/vault_commons.scailo_pb.ts#L1620)

___

### vaultFileVersionUuid

• **vaultFileVersionUuid**: `string` = `""`

The UUID of the version

--------------------------------------------------------

**`Generated`**

from field: string vault_file_version_uuid = 21;

#### Defined in

[src/vault_commons.scailo_pb.ts:1629](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/vault_commons.scailo_pb.ts#L1629)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:1652](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/vault_commons.scailo_pb.ts#L1652)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:1650](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/vault_commons.scailo_pb.ts#L1650)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EnclaveIngressFilterReq"``

#### Defined in

[src/vault_commons.scailo_pb.ts:1651](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/vault_commons.scailo_pb.ts#L1651)

## Methods

### clone

▸ **clone**(): [`EnclaveIngressFilterReq`](EnclaveIngressFilterReq.md)

Create a deep copy.

#### Returns

[`EnclaveIngressFilterReq`](EnclaveIngressFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EnclaveIngressFilterReq`](EnclaveIngressFilterReq.md) \| `PlainMessage`\<[`EnclaveIngressFilterReq`](EnclaveIngressFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`EnclaveIngressFilterReq`](EnclaveIngressFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EnclaveIngressFilterReq`](EnclaveIngressFilterReq.md)\>

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
| `a` | `undefined` \| [`EnclaveIngressFilterReq`](EnclaveIngressFilterReq.md) \| `PlainMessage`\<[`EnclaveIngressFilterReq`](EnclaveIngressFilterReq.md)\> |
| `b` | `undefined` \| [`EnclaveIngressFilterReq`](EnclaveIngressFilterReq.md) \| `PlainMessage`\<[`EnclaveIngressFilterReq`](EnclaveIngressFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:1678](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/vault_commons.scailo_pb.ts#L1678)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EnclaveIngressFilterReq`](EnclaveIngressFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EnclaveIngressFilterReq`](EnclaveIngressFilterReq.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1666](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/vault_commons.scailo_pb.ts#L1666)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EnclaveIngressFilterReq`](EnclaveIngressFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveIngressFilterReq`](EnclaveIngressFilterReq.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1670](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/vault_commons.scailo_pb.ts#L1670)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EnclaveIngressFilterReq`](EnclaveIngressFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveIngressFilterReq`](EnclaveIngressFilterReq.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1674](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/vault_commons.scailo_pb.ts#L1674)
