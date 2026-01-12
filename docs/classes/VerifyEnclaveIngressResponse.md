[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VerifyEnclaveIngressResponse

# Class: VerifyEnclaveIngressResponse

The response payload to verify an enclave ingress

**`Generated`**

from message Scailo.VerifyEnclaveIngressResponse

## Hierarchy

- `Message`\<[`VerifyEnclaveIngressResponse`](VerifyEnclaveIngressResponse.md)\>

  ↳ **`VerifyEnclaveIngressResponse`**

## Table of contents

### Constructors

- [constructor](VerifyEnclaveIngressResponse.md#constructor)

### Properties

- [authToken](VerifyEnclaveIngressResponse.md#authtoken)
- [enclaveName](VerifyEnclaveIngressResponse.md#enclavename)
- [expiresAt](VerifyEnclaveIngressResponse.md#expiresat)
- [roleUuid](VerifyEnclaveIngressResponse.md#roleuuid)
- [userUuid](VerifyEnclaveIngressResponse.md#useruuid)
- [fields](VerifyEnclaveIngressResponse.md#fields)
- [runtime](VerifyEnclaveIngressResponse.md#runtime)
- [typeName](VerifyEnclaveIngressResponse.md#typename)

### Methods

- [clone](VerifyEnclaveIngressResponse.md#clone)
- [equals](VerifyEnclaveIngressResponse.md#equals)
- [fromBinary](VerifyEnclaveIngressResponse.md#frombinary)
- [fromJson](VerifyEnclaveIngressResponse.md#fromjson)
- [fromJsonString](VerifyEnclaveIngressResponse.md#fromjsonstring)
- [getType](VerifyEnclaveIngressResponse.md#gettype)
- [toBinary](VerifyEnclaveIngressResponse.md#tobinary)
- [toJSON](VerifyEnclaveIngressResponse.md#tojson)
- [toJson](VerifyEnclaveIngressResponse.md#tojson-1)
- [toJsonString](VerifyEnclaveIngressResponse.md#tojsonstring)
- [equals](VerifyEnclaveIngressResponse.md#equals-1)
- [fromBinary](VerifyEnclaveIngressResponse.md#frombinary-1)
- [fromJson](VerifyEnclaveIngressResponse.md#fromjson-1)
- [fromJsonString](VerifyEnclaveIngressResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new VerifyEnclaveIngressResponse**(`data?`): [`VerifyEnclaveIngressResponse`](VerifyEnclaveIngressResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VerifyEnclaveIngressResponse`](VerifyEnclaveIngressResponse.md)\> |

#### Returns

[`VerifyEnclaveIngressResponse`](VerifyEnclaveIngressResponse.md)

#### Overrides

Message\&lt;VerifyEnclaveIngressResponse\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:1767](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1767)

## Properties

### authToken

• **authToken**: `string` = `""`

The auth token of the user that can be used for subsequent requests

**`Generated`**

from field: string auth_token = 4;

#### Defined in

[src/vault_commons.scailo_pb.ts:1758](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1758)

___

### enclaveName

• **enclaveName**: `string` = `""`

The name of the enclave

**`Generated`**

from field: string enclave_name = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:1737](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1737)

___

### expiresAt

• **expiresAt**: `bigint` = `protoInt64.zero`

The timestamp after which the auth token expires

**`Generated`**

from field: uint64 expires_at = 5;

#### Defined in

[src/vault_commons.scailo_pb.ts:1765](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1765)

___

### roleUuid

• **roleUuid**: `string` = `""`

The UUID of the user's role

**`Generated`**

from field: string role_uuid = 3;

#### Defined in

[src/vault_commons.scailo_pb.ts:1751](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1751)

___

### userUuid

• **userUuid**: `string` = `""`

The UUID of the user who is running the enclave

**`Generated`**

from field: string user_uuid = 2;

#### Defined in

[src/vault_commons.scailo_pb.ts:1744](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1744)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:1774](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1774)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:1772](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1772)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VerifyEnclaveIngressResponse"``

#### Defined in

[src/vault_commons.scailo_pb.ts:1773](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1773)

## Methods

### clone

▸ **clone**(): [`VerifyEnclaveIngressResponse`](VerifyEnclaveIngressResponse.md)

Create a deep copy.

#### Returns

[`VerifyEnclaveIngressResponse`](VerifyEnclaveIngressResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`VerifyEnclaveIngressResponse`](VerifyEnclaveIngressResponse.md) \| `PlainMessage`\<[`VerifyEnclaveIngressResponse`](VerifyEnclaveIngressResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`VerifyEnclaveIngressResponse`](VerifyEnclaveIngressResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VerifyEnclaveIngressResponse`](VerifyEnclaveIngressResponse.md)\>

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
| `a` | `undefined` \| [`VerifyEnclaveIngressResponse`](VerifyEnclaveIngressResponse.md) \| `PlainMessage`\<[`VerifyEnclaveIngressResponse`](VerifyEnclaveIngressResponse.md)\> |
| `b` | `undefined` \| [`VerifyEnclaveIngressResponse`](VerifyEnclaveIngressResponse.md) \| `PlainMessage`\<[`VerifyEnclaveIngressResponse`](VerifyEnclaveIngressResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:1794](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1794)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VerifyEnclaveIngressResponse`](VerifyEnclaveIngressResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VerifyEnclaveIngressResponse`](VerifyEnclaveIngressResponse.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1782](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1782)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VerifyEnclaveIngressResponse`](VerifyEnclaveIngressResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VerifyEnclaveIngressResponse`](VerifyEnclaveIngressResponse.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1786](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1786)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VerifyEnclaveIngressResponse`](VerifyEnclaveIngressResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VerifyEnclaveIngressResponse`](VerifyEnclaveIngressResponse.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1790](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L1790)
