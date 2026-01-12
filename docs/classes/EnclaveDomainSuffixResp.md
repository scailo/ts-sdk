[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EnclaveDomainSuffixResp

# Class: EnclaveDomainSuffixResp

The response that contains the default domain suffix that is used for creating enclave domains

**`Generated`**

from message Scailo.EnclaveDomainSuffixResp

## Hierarchy

- `Message`\<[`EnclaveDomainSuffixResp`](EnclaveDomainSuffixResp.md)\>

  ↳ **`EnclaveDomainSuffixResp`**

## Table of contents

### Constructors

- [constructor](EnclaveDomainSuffixResp.md#constructor)

### Properties

- [relay](EnclaveDomainSuffixResp.md#relay)
- [suffix](EnclaveDomainSuffixResp.md#suffix)
- [fields](EnclaveDomainSuffixResp.md#fields)
- [runtime](EnclaveDomainSuffixResp.md#runtime)
- [typeName](EnclaveDomainSuffixResp.md#typename)

### Methods

- [clone](EnclaveDomainSuffixResp.md#clone)
- [equals](EnclaveDomainSuffixResp.md#equals)
- [fromBinary](EnclaveDomainSuffixResp.md#frombinary)
- [fromJson](EnclaveDomainSuffixResp.md#fromjson)
- [fromJsonString](EnclaveDomainSuffixResp.md#fromjsonstring)
- [getType](EnclaveDomainSuffixResp.md#gettype)
- [toBinary](EnclaveDomainSuffixResp.md#tobinary)
- [toJSON](EnclaveDomainSuffixResp.md#tojson)
- [toJson](EnclaveDomainSuffixResp.md#tojson-1)
- [toJsonString](EnclaveDomainSuffixResp.md#tojsonstring)
- [equals](EnclaveDomainSuffixResp.md#equals-1)
- [fromBinary](EnclaveDomainSuffixResp.md#frombinary-1)
- [fromJson](EnclaveDomainSuffixResp.md#fromjson-1)
- [fromJsonString](EnclaveDomainSuffixResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new EnclaveDomainSuffixResp**(`data?`): [`EnclaveDomainSuffixResp`](EnclaveDomainSuffixResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EnclaveDomainSuffixResp`](EnclaveDomainSuffixResp.md)\> |

#### Returns

[`EnclaveDomainSuffixResp`](EnclaveDomainSuffixResp.md)

#### Overrides

Message\&lt;EnclaveDomainSuffixResp\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:2356](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2356)

## Properties

### relay

• **relay**: `string` = `""`

The relay that is used

**`Generated`**

from field: string relay = 2;

#### Defined in

[src/vault_commons.scailo_pb.ts:2354](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2354)

___

### suffix

• **suffix**: `string` = `""`

The suffix that is used

**`Generated`**

from field: string suffix = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:2347](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2347)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:2363](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2363)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:2361](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2361)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EnclaveDomainSuffixResp"``

#### Defined in

[src/vault_commons.scailo_pb.ts:2362](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2362)

## Methods

### clone

▸ **clone**(): [`EnclaveDomainSuffixResp`](EnclaveDomainSuffixResp.md)

Create a deep copy.

#### Returns

[`EnclaveDomainSuffixResp`](EnclaveDomainSuffixResp.md)

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
| `other` | `undefined` \| ``null`` \| [`EnclaveDomainSuffixResp`](EnclaveDomainSuffixResp.md) \| `PlainMessage`\<[`EnclaveDomainSuffixResp`](EnclaveDomainSuffixResp.md)\> |

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

▸ **getType**(): `MessageType`\<[`EnclaveDomainSuffixResp`](EnclaveDomainSuffixResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EnclaveDomainSuffixResp`](EnclaveDomainSuffixResp.md)\>

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
| `a` | `undefined` \| [`EnclaveDomainSuffixResp`](EnclaveDomainSuffixResp.md) \| `PlainMessage`\<[`EnclaveDomainSuffixResp`](EnclaveDomainSuffixResp.md)\> |
| `b` | `undefined` \| [`EnclaveDomainSuffixResp`](EnclaveDomainSuffixResp.md) \| `PlainMessage`\<[`EnclaveDomainSuffixResp`](EnclaveDomainSuffixResp.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:2380](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2380)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EnclaveDomainSuffixResp`](EnclaveDomainSuffixResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EnclaveDomainSuffixResp`](EnclaveDomainSuffixResp.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2368](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2368)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EnclaveDomainSuffixResp`](EnclaveDomainSuffixResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveDomainSuffixResp`](EnclaveDomainSuffixResp.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2372](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2372)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EnclaveDomainSuffixResp`](EnclaveDomainSuffixResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveDomainSuffixResp`](EnclaveDomainSuffixResp.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2376](https://github.com/scailo/ts-sdk/blob/a4beeae7337f3286d15a043b7f6bda528ceb880f/src/vault_commons.scailo_pb.ts#L2376)
