[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EnclaveIngressCountReq

# Class: EnclaveIngressCountReq

Describes the request payload of a count filter for enclave runs

**`Generated`**

from message Scailo.EnclaveIngressCountReq

## Hierarchy

- `Message`\<[`EnclaveIngressCountReq`](EnclaveIngressCountReq.md)\>

  ↳ **`EnclaveIngressCountReq`**

## Table of contents

### Constructors

- [constructor](EnclaveIngressCountReq.md#constructor)

### Properties

- [creationTimestampEnd](EnclaveIngressCountReq.md#creationtimestampend)
- [creationTimestampStart](EnclaveIngressCountReq.md#creationtimestampstart)
- [isActive](EnclaveIngressCountReq.md#isactive)
- [modificationTimestampEnd](EnclaveIngressCountReq.md#modificationtimestampend)
- [modificationTimestampStart](EnclaveIngressCountReq.md#modificationtimestampstart)
- [runnerRoleId](EnclaveIngressCountReq.md#runnerroleid)
- [runnerUserId](EnclaveIngressCountReq.md#runneruserid)
- [vaultFileUuid](EnclaveIngressCountReq.md#vaultfileuuid)
- [vaultFileVersionUuid](EnclaveIngressCountReq.md#vaultfileversionuuid)
- [fields](EnclaveIngressCountReq.md#fields)
- [runtime](EnclaveIngressCountReq.md#runtime)
- [typeName](EnclaveIngressCountReq.md#typename)

### Methods

- [clone](EnclaveIngressCountReq.md#clone)
- [equals](EnclaveIngressCountReq.md#equals)
- [fromBinary](EnclaveIngressCountReq.md#frombinary)
- [fromJson](EnclaveIngressCountReq.md#fromjson)
- [fromJsonString](EnclaveIngressCountReq.md#fromjsonstring)
- [getType](EnclaveIngressCountReq.md#gettype)
- [toBinary](EnclaveIngressCountReq.md#tobinary)
- [toJSON](EnclaveIngressCountReq.md#tojson)
- [toJson](EnclaveIngressCountReq.md#tojson-1)
- [toJsonString](EnclaveIngressCountReq.md#tojsonstring)
- [equals](EnclaveIngressCountReq.md#equals-1)
- [fromBinary](EnclaveIngressCountReq.md#frombinary-1)
- [fromJson](EnclaveIngressCountReq.md#fromjson-1)
- [fromJsonString](EnclaveIngressCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EnclaveIngressCountReq**(`data?`): [`EnclaveIngressCountReq`](EnclaveIngressCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EnclaveIngressCountReq`](EnclaveIngressCountReq.md)\> |

#### Returns

[`EnclaveIngressCountReq`](EnclaveIngressCountReq.md)

#### Overrides

Message\&lt;EnclaveIngressCountReq\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:1518](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1518)

## Properties

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/vault_commons.scailo_pb.ts:1472](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1472)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/vault_commons.scailo_pb.ts:1465](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1465)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:1458](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1458)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/vault_commons.scailo_pb.ts:1486](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1486)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/vault_commons.scailo_pb.ts:1479](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1479)

___

### runnerRoleId

• **runnerRoleId**: `bigint` = `protoInt64.zero`

Stores the ID of the user when this enclave was executed

**`Generated`**

from field: uint64 runner_role_id = 31;

#### Defined in

[src/vault_commons.scailo_pb.ts:1516](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1516)

___

### runnerUserId

• **runnerUserId**: `bigint` = `protoInt64.zero`

Stores the ID of the user who executed this enclave

**`Generated`**

from field: uint64 runner_user_id = 30;

#### Defined in

[src/vault_commons.scailo_pb.ts:1509](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1509)

___

### vaultFileUuid

• **vaultFileUuid**: `string` = `""`

The UUID of the file

**`Generated`**

from field: string vault_file_uuid = 20;

#### Defined in

[src/vault_commons.scailo_pb.ts:1493](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1493)

___

### vaultFileVersionUuid

• **vaultFileVersionUuid**: `string` = `""`

The UUID of the version

--------------------------------------------------------

**`Generated`**

from field: string vault_file_version_uuid = 21;

#### Defined in

[src/vault_commons.scailo_pb.ts:1502](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1502)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:1525](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1525)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:1523](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1523)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EnclaveIngressCountReq"``

#### Defined in

[src/vault_commons.scailo_pb.ts:1524](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1524)

## Methods

### clone

▸ **clone**(): [`EnclaveIngressCountReq`](EnclaveIngressCountReq.md)

Create a deep copy.

#### Returns

[`EnclaveIngressCountReq`](EnclaveIngressCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EnclaveIngressCountReq`](EnclaveIngressCountReq.md) \| `PlainMessage`\<[`EnclaveIngressCountReq`](EnclaveIngressCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`EnclaveIngressCountReq`](EnclaveIngressCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EnclaveIngressCountReq`](EnclaveIngressCountReq.md)\>

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
| `a` | `undefined` \| [`EnclaveIngressCountReq`](EnclaveIngressCountReq.md) \| `PlainMessage`\<[`EnclaveIngressCountReq`](EnclaveIngressCountReq.md)\> |
| `b` | `undefined` \| [`EnclaveIngressCountReq`](EnclaveIngressCountReq.md) \| `PlainMessage`\<[`EnclaveIngressCountReq`](EnclaveIngressCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:1549](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1549)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EnclaveIngressCountReq`](EnclaveIngressCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EnclaveIngressCountReq`](EnclaveIngressCountReq.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1537](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1537)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EnclaveIngressCountReq`](EnclaveIngressCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveIngressCountReq`](EnclaveIngressCountReq.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1541](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1541)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EnclaveIngressCountReq`](EnclaveIngressCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveIngressCountReq`](EnclaveIngressCountReq.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1545](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1545)
