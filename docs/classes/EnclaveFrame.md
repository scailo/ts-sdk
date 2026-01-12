[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EnclaveFrame

# Class: EnclaveFrame

Denotes an individual frame that is part of an enclave

**`Generated`**

from message Scailo.EnclaveFrame

## Hierarchy

- `Message`\<[`EnclaveFrame`](EnclaveFrame.md)\>

  ↳ **`EnclaveFrame`**

## Table of contents

### Constructors

- [constructor](EnclaveFrame.md#constructor)

### Properties

- [autoRefreshInterval](EnclaveFrame.md#autorefreshinterval)
- [entityUuid](EnclaveFrame.md#entityuuid)
- [height](EnclaveFrame.md#height)
- [metadata](EnclaveFrame.md#metadata)
- [sequenceNumber](EnclaveFrame.md#sequencenumber)
- [userId](EnclaveFrame.md#userid)
- [vaultFileId](EnclaveFrame.md#vaultfileid)
- [width](EnclaveFrame.md#width)
- [fields](EnclaveFrame.md#fields)
- [runtime](EnclaveFrame.md#runtime)
- [typeName](EnclaveFrame.md#typename)

### Methods

- [clone](EnclaveFrame.md#clone)
- [equals](EnclaveFrame.md#equals)
- [fromBinary](EnclaveFrame.md#frombinary)
- [fromJson](EnclaveFrame.md#fromjson)
- [fromJsonString](EnclaveFrame.md#fromjsonstring)
- [getType](EnclaveFrame.md#gettype)
- [toBinary](EnclaveFrame.md#tobinary)
- [toJSON](EnclaveFrame.md#tojson)
- [toJson](EnclaveFrame.md#tojson-1)
- [toJsonString](EnclaveFrame.md#tojsonstring)
- [equals](EnclaveFrame.md#equals-1)
- [fromBinary](EnclaveFrame.md#frombinary-1)
- [fromJson](EnclaveFrame.md#fromjson-1)
- [fromJsonString](EnclaveFrame.md#fromjsonstring-1)

## Constructors

### constructor

• **new EnclaveFrame**(`data?`): [`EnclaveFrame`](EnclaveFrame.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EnclaveFrame`](EnclaveFrame.md)\> |

#### Returns

[`EnclaveFrame`](EnclaveFrame.md)

#### Overrides

Message\&lt;EnclaveFrame\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:2596](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2596)

## Properties

### autoRefreshInterval

• **autoRefreshInterval**: `bigint` = `protoInt64.zero`

The time in seconds after which the frame needs to be refreshed

**`Generated`**

from field: uint64 auto_refresh_interval = 21;

#### Defined in

[src/vault_commons.scailo_pb.ts:2580](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2580)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:2545](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2545)

___

### height

• **height**: `bigint` = `protoInt64.zero`

The height of the frame in vh (viewport height)

**`Generated`**

from field: uint64 height = 23;

#### Defined in

[src/vault_commons.scailo_pb.ts:2594](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2594)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this user

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/vault_commons.scailo_pb.ts:2552](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2552)

___

### sequenceNumber

• **sequenceNumber**: `bigint` = `protoInt64.zero`

The sequence number of the frame

**`Generated`**

from field: uint64 sequence_number = 20;

#### Defined in

[src/vault_commons.scailo_pb.ts:2573](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2573)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

Stores the ID of the user that the frame belongs to

**`Generated`**

from field: uint64 user_id = 10;

#### Defined in

[src/vault_commons.scailo_pb.ts:2559](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2559)

___

### vaultFileId

• **vaultFileId**: `bigint` = `protoInt64.zero`

Stores the ID of the file that is used to render the frame

**`Generated`**

from field: uint64 vault_file_id = 11;

#### Defined in

[src/vault_commons.scailo_pb.ts:2566](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2566)

___

### width

• **width**: `bigint` = `protoInt64.zero`

The width of the frame, with the possible values being 3, 4, 6, 8, 9, and 12

**`Generated`**

from field: uint64 width = 22;

#### Defined in

[src/vault_commons.scailo_pb.ts:2587](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2587)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:2603](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2603)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:2601](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2601)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EnclaveFrame"``

#### Defined in

[src/vault_commons.scailo_pb.ts:2602](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2602)

## Methods

### clone

▸ **clone**(): [`EnclaveFrame`](EnclaveFrame.md)

Create a deep copy.

#### Returns

[`EnclaveFrame`](EnclaveFrame.md)

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
| `other` | `undefined` \| ``null`` \| [`EnclaveFrame`](EnclaveFrame.md) \| `PlainMessage`\<[`EnclaveFrame`](EnclaveFrame.md)\> |

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

▸ **getType**(): `MessageType`\<[`EnclaveFrame`](EnclaveFrame.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EnclaveFrame`](EnclaveFrame.md)\>

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
| `a` | `undefined` \| [`EnclaveFrame`](EnclaveFrame.md) \| `PlainMessage`\<[`EnclaveFrame`](EnclaveFrame.md)\> |
| `b` | `undefined` \| [`EnclaveFrame`](EnclaveFrame.md) \| `PlainMessage`\<[`EnclaveFrame`](EnclaveFrame.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:2626](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2626)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EnclaveFrame`](EnclaveFrame.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EnclaveFrame`](EnclaveFrame.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2614](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2614)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EnclaveFrame`](EnclaveFrame.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveFrame`](EnclaveFrame.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2618](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2618)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EnclaveFrame`](EnclaveFrame.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveFrame`](EnclaveFrame.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2622](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2622)
