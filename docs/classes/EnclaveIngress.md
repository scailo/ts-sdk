[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EnclaveIngress

# Class: EnclaveIngress

Describes the parameters that are a part of each enclave ingress

**`Generated`**

from message Scailo.EnclaveIngress

## Hierarchy

- `Message`\<[`EnclaveIngress`](EnclaveIngress.md)\>

  ↳ **`EnclaveIngress`**

## Table of contents

### Constructors

- [constructor](EnclaveIngress.md#constructor)

### Properties

- [appEndpoint](EnclaveIngress.md#appendpoint)
- [enclaveName](EnclaveIngress.md#enclavename)
- [entityUuid](EnclaveIngress.md#entityuuid)
- [expiresAt](EnclaveIngress.md#expiresat)
- [ipAddr](EnclaveIngress.md#ipaddr)
- [metadata](EnclaveIngress.md#metadata)
- [runnerRoleId](EnclaveIngress.md#runnerroleid)
- [runnerUserId](EnclaveIngress.md#runneruserid)
- [token](EnclaveIngress.md#token)
- [vaultFileId](EnclaveIngress.md#vaultfileid)
- [vaultFileVersionId](EnclaveIngress.md#vaultfileversionid)
- [fields](EnclaveIngress.md#fields)
- [runtime](EnclaveIngress.md#runtime)
- [typeName](EnclaveIngress.md#typename)

### Methods

- [clone](EnclaveIngress.md#clone)
- [equals](EnclaveIngress.md#equals)
- [fromBinary](EnclaveIngress.md#frombinary)
- [fromJson](EnclaveIngress.md#fromjson)
- [fromJsonString](EnclaveIngress.md#fromjsonstring)
- [getType](EnclaveIngress.md#gettype)
- [toBinary](EnclaveIngress.md#tobinary)
- [toJSON](EnclaveIngress.md#tojson)
- [toJson](EnclaveIngress.md#tojson-1)
- [toJsonString](EnclaveIngress.md#tojsonstring)
- [equals](EnclaveIngress.md#equals-1)
- [fromBinary](EnclaveIngress.md#frombinary-1)
- [fromJson](EnclaveIngress.md#fromjson-1)
- [fromJsonString](EnclaveIngress.md#fromjsonstring-1)

## Constructors

### constructor

• **new EnclaveIngress**(`data?`): [`EnclaveIngress`](EnclaveIngress.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EnclaveIngress`](EnclaveIngress.md)\> |

#### Returns

[`EnclaveIngress`](EnclaveIngress.md)

#### Overrides

Message\&lt;EnclaveIngress\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:1366](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/vault_commons.scailo_pb.ts#L1366)

## Properties

### appEndpoint

• **appEndpoint**: `string` = `""`

Stores the endpoint of the application execution

**`Generated`**

from field: string app_endpoint = 60;

#### Defined in

[src/vault_commons.scailo_pb.ts:1364](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/vault_commons.scailo_pb.ts#L1364)

___

### enclaveName

• **enclaveName**: `string` = `""`

Stores the unique identifier of the application

**`Generated`**

from field: string enclave_name = 22;

#### Defined in

[src/vault_commons.scailo_pb.ts:1336](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/vault_commons.scailo_pb.ts#L1336)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:1294](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/vault_commons.scailo_pb.ts#L1294)

___

### expiresAt

• **expiresAt**: `bigint` = `protoInt64.zero`

Stores the expiry timestamp of the ingress token

**`Generated`**

from field: uint64 expires_at = 11;

#### Defined in

[src/vault_commons.scailo_pb.ts:1315](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/vault_commons.scailo_pb.ts#L1315)

___

### ipAddr

• **ipAddr**: `string` = `""`

Stores the IP address from where the app was executed

**`Generated`**

from field: string ip_addr = 24;

#### Defined in

[src/vault_commons.scailo_pb.ts:1343](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/vault_commons.scailo_pb.ts#L1343)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this user

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/vault_commons.scailo_pb.ts:1301](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/vault_commons.scailo_pb.ts#L1301)

___

### runnerRoleId

• **runnerRoleId**: `bigint` = `protoInt64.zero`

Stores the ID of the user when this enclave was executed

**`Generated`**

from field: uint64 runner_role_id = 31;

#### Defined in

[src/vault_commons.scailo_pb.ts:1357](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/vault_commons.scailo_pb.ts#L1357)

___

### runnerUserId

• **runnerUserId**: `bigint` = `protoInt64.zero`

Stores the ID of the user who executed this enclave

**`Generated`**

from field: uint64 runner_user_id = 30;

#### Defined in

[src/vault_commons.scailo_pb.ts:1350](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/vault_commons.scailo_pb.ts#L1350)

___

### token

• **token**: `string` = `""`

Stores the unique token that can be used to identify the user who executed this enclave

**`Generated`**

from field: string token = 10;

#### Defined in

[src/vault_commons.scailo_pb.ts:1308](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/vault_commons.scailo_pb.ts#L1308)

___

### vaultFileId

• **vaultFileId**: `bigint` = `protoInt64.zero`

Stores the ID of the file that is being executed

**`Generated`**

from field: uint64 vault_file_id = 20;

#### Defined in

[src/vault_commons.scailo_pb.ts:1322](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/vault_commons.scailo_pb.ts#L1322)

___

### vaultFileVersionId

• **vaultFileVersionId**: `bigint` = `protoInt64.zero`

Stores the ID of the version of the file that is being executed

**`Generated`**

from field: uint64 vault_file_version_id = 21;

#### Defined in

[src/vault_commons.scailo_pb.ts:1329](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/vault_commons.scailo_pb.ts#L1329)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:1373](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/vault_commons.scailo_pb.ts#L1373)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:1371](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/vault_commons.scailo_pb.ts#L1371)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EnclaveIngress"``

#### Defined in

[src/vault_commons.scailo_pb.ts:1372](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/vault_commons.scailo_pb.ts#L1372)

## Methods

### clone

▸ **clone**(): [`EnclaveIngress`](EnclaveIngress.md)

Create a deep copy.

#### Returns

[`EnclaveIngress`](EnclaveIngress.md)

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
| `other` | `undefined` \| ``null`` \| [`EnclaveIngress`](EnclaveIngress.md) \| `PlainMessage`\<[`EnclaveIngress`](EnclaveIngress.md)\> |

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

▸ **getType**(): `MessageType`\<[`EnclaveIngress`](EnclaveIngress.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EnclaveIngress`](EnclaveIngress.md)\>

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
| `a` | `undefined` \| [`EnclaveIngress`](EnclaveIngress.md) \| `PlainMessage`\<[`EnclaveIngress`](EnclaveIngress.md)\> |
| `b` | `undefined` \| [`EnclaveIngress`](EnclaveIngress.md) \| `PlainMessage`\<[`EnclaveIngress`](EnclaveIngress.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:1399](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/vault_commons.scailo_pb.ts#L1399)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EnclaveIngress`](EnclaveIngress.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EnclaveIngress`](EnclaveIngress.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1387](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/vault_commons.scailo_pb.ts#L1387)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EnclaveIngress`](EnclaveIngress.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveIngress`](EnclaveIngress.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1391](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/vault_commons.scailo_pb.ts#L1391)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EnclaveIngress`](EnclaveIngress.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveIngress`](EnclaveIngress.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1395](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/vault_commons.scailo_pb.ts#L1395)
