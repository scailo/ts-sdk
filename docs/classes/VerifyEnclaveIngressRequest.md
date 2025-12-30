[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VerifyEnclaveIngressRequest

# Class: VerifyEnclaveIngressRequest

The request payload to verify an enclave ingress

**`Generated`**

from message Scailo.VerifyEnclaveIngressRequest

## Hierarchy

- `Message`\<[`VerifyEnclaveIngressRequest`](VerifyEnclaveIngressRequest.md)\>

  ↳ **`VerifyEnclaveIngressRequest`**

## Table of contents

### Constructors

- [constructor](VerifyEnclaveIngressRequest.md#constructor)

### Properties

- [token](VerifyEnclaveIngressRequest.md#token)
- [fields](VerifyEnclaveIngressRequest.md#fields)
- [runtime](VerifyEnclaveIngressRequest.md#runtime)
- [typeName](VerifyEnclaveIngressRequest.md#typename)

### Methods

- [clone](VerifyEnclaveIngressRequest.md#clone)
- [equals](VerifyEnclaveIngressRequest.md#equals)
- [fromBinary](VerifyEnclaveIngressRequest.md#frombinary)
- [fromJson](VerifyEnclaveIngressRequest.md#fromjson)
- [fromJsonString](VerifyEnclaveIngressRequest.md#fromjsonstring)
- [getType](VerifyEnclaveIngressRequest.md#gettype)
- [toBinary](VerifyEnclaveIngressRequest.md#tobinary)
- [toJSON](VerifyEnclaveIngressRequest.md#tojson)
- [toJson](VerifyEnclaveIngressRequest.md#tojson-1)
- [toJsonString](VerifyEnclaveIngressRequest.md#tojsonstring)
- [equals](VerifyEnclaveIngressRequest.md#equals-1)
- [fromBinary](VerifyEnclaveIngressRequest.md#frombinary-1)
- [fromJson](VerifyEnclaveIngressRequest.md#fromjson-1)
- [fromJsonString](VerifyEnclaveIngressRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VerifyEnclaveIngressRequest**(`data?`): [`VerifyEnclaveIngressRequest`](VerifyEnclaveIngressRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VerifyEnclaveIngressRequest`](VerifyEnclaveIngressRequest.md)\> |

#### Returns

[`VerifyEnclaveIngressRequest`](VerifyEnclaveIngressRequest.md)

#### Overrides

Message\&lt;VerifyEnclaveIngressRequest\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:1623](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/vault_commons.scailo_pb.ts#L1623)

## Properties

### token

• **token**: `string` = `""`

The token that needs to be verified

**`Generated`**

from field: string token = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:1621](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/vault_commons.scailo_pb.ts#L1621)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:1630](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/vault_commons.scailo_pb.ts#L1630)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:1628](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/vault_commons.scailo_pb.ts#L1628)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VerifyEnclaveIngressRequest"``

#### Defined in

[src/vault_commons.scailo_pb.ts:1629](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/vault_commons.scailo_pb.ts#L1629)

## Methods

### clone

▸ **clone**(): [`VerifyEnclaveIngressRequest`](VerifyEnclaveIngressRequest.md)

Create a deep copy.

#### Returns

[`VerifyEnclaveIngressRequest`](VerifyEnclaveIngressRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VerifyEnclaveIngressRequest`](VerifyEnclaveIngressRequest.md) \| `PlainMessage`\<[`VerifyEnclaveIngressRequest`](VerifyEnclaveIngressRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VerifyEnclaveIngressRequest`](VerifyEnclaveIngressRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VerifyEnclaveIngressRequest`](VerifyEnclaveIngressRequest.md)\>

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
| `a` | `undefined` \| [`VerifyEnclaveIngressRequest`](VerifyEnclaveIngressRequest.md) \| `PlainMessage`\<[`VerifyEnclaveIngressRequest`](VerifyEnclaveIngressRequest.md)\> |
| `b` | `undefined` \| [`VerifyEnclaveIngressRequest`](VerifyEnclaveIngressRequest.md) \| `PlainMessage`\<[`VerifyEnclaveIngressRequest`](VerifyEnclaveIngressRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:1646](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/vault_commons.scailo_pb.ts#L1646)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VerifyEnclaveIngressRequest`](VerifyEnclaveIngressRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VerifyEnclaveIngressRequest`](VerifyEnclaveIngressRequest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1634](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/vault_commons.scailo_pb.ts#L1634)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VerifyEnclaveIngressRequest`](VerifyEnclaveIngressRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VerifyEnclaveIngressRequest`](VerifyEnclaveIngressRequest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1638](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/vault_commons.scailo_pb.ts#L1638)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VerifyEnclaveIngressRequest`](VerifyEnclaveIngressRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VerifyEnclaveIngressRequest`](VerifyEnclaveIngressRequest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1642](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/vault_commons.scailo_pb.ts#L1642)
