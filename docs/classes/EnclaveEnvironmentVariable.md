[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EnclaveEnvironmentVariable

# Class: EnclaveEnvironmentVariable

Denotes an individual environment variable that is part of an enclave

**`Generated`**

from message Scailo.EnclaveEnvironmentVariable

## Hierarchy

- `Message`\<[`EnclaveEnvironmentVariable`](EnclaveEnvironmentVariable.md)\>

  ↳ **`EnclaveEnvironmentVariable`**

## Table of contents

### Constructors

- [constructor](EnclaveEnvironmentVariable.md#constructor)

### Properties

- [entityUuid](EnclaveEnvironmentVariable.md#entityuuid)
- [isSecret](EnclaveEnvironmentVariable.md#issecret)
- [metadata](EnclaveEnvironmentVariable.md#metadata)
- [name](EnclaveEnvironmentVariable.md#name)
- [value](EnclaveEnvironmentVariable.md#value)
- [vaultFileId](EnclaveEnvironmentVariable.md#vaultfileid)
- [fields](EnclaveEnvironmentVariable.md#fields)
- [runtime](EnclaveEnvironmentVariable.md#runtime)
- [typeName](EnclaveEnvironmentVariable.md#typename)

### Methods

- [clone](EnclaveEnvironmentVariable.md#clone)
- [equals](EnclaveEnvironmentVariable.md#equals)
- [fromBinary](EnclaveEnvironmentVariable.md#frombinary)
- [fromJson](EnclaveEnvironmentVariable.md#fromjson)
- [fromJsonString](EnclaveEnvironmentVariable.md#fromjsonstring)
- [getType](EnclaveEnvironmentVariable.md#gettype)
- [toBinary](EnclaveEnvironmentVariable.md#tobinary)
- [toJSON](EnclaveEnvironmentVariable.md#tojson)
- [toJson](EnclaveEnvironmentVariable.md#tojson-1)
- [toJsonString](EnclaveEnvironmentVariable.md#tojsonstring)
- [equals](EnclaveEnvironmentVariable.md#equals-1)
- [fromBinary](EnclaveEnvironmentVariable.md#frombinary-1)
- [fromJson](EnclaveEnvironmentVariable.md#fromjson-1)
- [fromJsonString](EnclaveEnvironmentVariable.md#fromjsonstring-1)

## Constructors

### constructor

• **new EnclaveEnvironmentVariable**(`data?`): [`EnclaveEnvironmentVariable`](EnclaveEnvironmentVariable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EnclaveEnvironmentVariable`](EnclaveEnvironmentVariable.md)\> |

#### Returns

[`EnclaveEnvironmentVariable`](EnclaveEnvironmentVariable.md)

#### Overrides

Message\&lt;EnclaveEnvironmentVariable\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:1964](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/vault_commons.scailo_pb.ts#L1964)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:1927](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/vault_commons.scailo_pb.ts#L1927)

___

### isSecret

• **isSecret**: `boolean` = `false`

Denotes if the value should be stored as a secret (will not be visible to the user post creation)

**`Generated`**

from field: bool is_secret = 13;

#### Defined in

[src/vault_commons.scailo_pb.ts:1962](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/vault_commons.scailo_pb.ts#L1962)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this user

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/vault_commons.scailo_pb.ts:1934](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/vault_commons.scailo_pb.ts#L1934)

___

### name

• **name**: `string` = `""`

The name of the environment variable

**`Generated`**

from field: string name = 11;

#### Defined in

[src/vault_commons.scailo_pb.ts:1948](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/vault_commons.scailo_pb.ts#L1948)

___

### value

• **value**: `string` = `""`

The value of the environment variable

**`Generated`**

from field: string value = 12;

#### Defined in

[src/vault_commons.scailo_pb.ts:1955](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/vault_commons.scailo_pb.ts#L1955)

___

### vaultFileId

• **vaultFileId**: `bigint` = `protoInt64.zero`

Stores the ID of the file that the environment variable belongs to

**`Generated`**

from field: uint64 vault_file_id = 10;

#### Defined in

[src/vault_commons.scailo_pb.ts:1941](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/vault_commons.scailo_pb.ts#L1941)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:1971](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/vault_commons.scailo_pb.ts#L1971)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:1969](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/vault_commons.scailo_pb.ts#L1969)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EnclaveEnvironmentVariable"``

#### Defined in

[src/vault_commons.scailo_pb.ts:1970](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/vault_commons.scailo_pb.ts#L1970)

## Methods

### clone

▸ **clone**(): [`EnclaveEnvironmentVariable`](EnclaveEnvironmentVariable.md)

Create a deep copy.

#### Returns

[`EnclaveEnvironmentVariable`](EnclaveEnvironmentVariable.md)

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
| `other` | `undefined` \| ``null`` \| [`EnclaveEnvironmentVariable`](EnclaveEnvironmentVariable.md) \| `PlainMessage`\<[`EnclaveEnvironmentVariable`](EnclaveEnvironmentVariable.md)\> |

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

▸ **getType**(): `MessageType`\<[`EnclaveEnvironmentVariable`](EnclaveEnvironmentVariable.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EnclaveEnvironmentVariable`](EnclaveEnvironmentVariable.md)\>

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
| `a` | `undefined` \| [`EnclaveEnvironmentVariable`](EnclaveEnvironmentVariable.md) \| `PlainMessage`\<[`EnclaveEnvironmentVariable`](EnclaveEnvironmentVariable.md)\> |
| `b` | `undefined` \| [`EnclaveEnvironmentVariable`](EnclaveEnvironmentVariable.md) \| `PlainMessage`\<[`EnclaveEnvironmentVariable`](EnclaveEnvironmentVariable.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:1992](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/vault_commons.scailo_pb.ts#L1992)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EnclaveEnvironmentVariable`](EnclaveEnvironmentVariable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EnclaveEnvironmentVariable`](EnclaveEnvironmentVariable.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1980](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/vault_commons.scailo_pb.ts#L1980)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EnclaveEnvironmentVariable`](EnclaveEnvironmentVariable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveEnvironmentVariable`](EnclaveEnvironmentVariable.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1984](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/vault_commons.scailo_pb.ts#L1984)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EnclaveEnvironmentVariable`](EnclaveEnvironmentVariable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveEnvironmentVariable`](EnclaveEnvironmentVariable.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1988](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/vault_commons.scailo_pb.ts#L1988)
