[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LedgersServiceCreateRequest

# Class: LedgersServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.LedgersServiceCreateRequest

## Hierarchy

- `Message`\<[`LedgersServiceCreateRequest`](LedgersServiceCreateRequest.md)\>

  ↳ **`LedgersServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](LedgersServiceCreateRequest.md#constructor)

### Properties

- [code](LedgersServiceCreateRequest.md#code)
- [description](LedgersServiceCreateRequest.md#description)
- [entityUuid](LedgersServiceCreateRequest.md#entityuuid)
- [isLeaf](LedgersServiceCreateRequest.md#isleaf)
- [name](LedgersServiceCreateRequest.md#name)
- [parentLedgerId](LedgersServiceCreateRequest.md#parentledgerid)
- [userComment](LedgersServiceCreateRequest.md#usercomment)
- [fields](LedgersServiceCreateRequest.md#fields)
- [runtime](LedgersServiceCreateRequest.md#runtime)
- [typeName](LedgersServiceCreateRequest.md#typename)

### Methods

- [clone](LedgersServiceCreateRequest.md#clone)
- [equals](LedgersServiceCreateRequest.md#equals)
- [fromBinary](LedgersServiceCreateRequest.md#frombinary)
- [fromJson](LedgersServiceCreateRequest.md#fromjson)
- [fromJsonString](LedgersServiceCreateRequest.md#fromjsonstring)
- [getType](LedgersServiceCreateRequest.md#gettype)
- [toBinary](LedgersServiceCreateRequest.md#tobinary)
- [toJSON](LedgersServiceCreateRequest.md#tojson)
- [toJson](LedgersServiceCreateRequest.md#tojson-1)
- [toJsonString](LedgersServiceCreateRequest.md#tojsonstring)
- [equals](LedgersServiceCreateRequest.md#equals-1)
- [fromBinary](LedgersServiceCreateRequest.md#frombinary-1)
- [fromJson](LedgersServiceCreateRequest.md#fromjson-1)
- [fromJsonString](LedgersServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LedgersServiceCreateRequest**(`data?`): [`LedgersServiceCreateRequest`](LedgersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LedgersServiceCreateRequest`](LedgersServiceCreateRequest.md)\> |

#### Returns

[`LedgersServiceCreateRequest`](LedgersServiceCreateRequest.md)

#### Overrides

Message\&lt;LedgersServiceCreateRequest\&gt;.constructor

#### Defined in

[src/ledgers.scailo_pb.ts:141](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L141)

## Properties

### code

• **code**: `string` = `""`

The unique code by which the ledger is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/ledgers.scailo_pb.ts:118](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L118)

___

### description

• **description**: `string` = `""`

The description of the ledger

**`Generated`**

from field: string description = 14;

#### Defined in

[src/ledgers.scailo_pb.ts:139](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L139)

___

### entityUuid

• **entityUuid**: `string` = `""`

Ledgers a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/ledgers.scailo_pb.ts:97](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L97)

___

### isLeaf

• **isLeaf**: `boolean` = `false`

Stores if this is a leaf ledger or a non-leaf ledger

**`Generated`**

from field: bool is_leaf = 13;

#### Defined in

[src/ledgers.scailo_pb.ts:132](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L132)

___

### name

• **name**: `string` = `""`

The name of the ledger

**`Generated`**

from field: string name = 10;

#### Defined in

[src/ledgers.scailo_pb.ts:111](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L111)

___

### parentLedgerId

• **parentLedgerId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent ledger (0, if the first ledger that is being created is a leaf ledger)

**`Generated`**

from field: uint64 parent_ledger_id = 12;

#### Defined in

[src/ledgers.scailo_pb.ts:125](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L125)

___

### userComment

• **userComment**: `string` = `""`

Ledgers any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/ledgers.scailo_pb.ts:104](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L104)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/ledgers.scailo_pb.ts:148](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L148)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/ledgers.scailo_pb.ts:146](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L146)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LedgersServiceCreateRequest"``

#### Defined in

[src/ledgers.scailo_pb.ts:147](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L147)

## Methods

### clone

▸ **clone**(): [`LedgersServiceCreateRequest`](LedgersServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`LedgersServiceCreateRequest`](LedgersServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LedgersServiceCreateRequest`](LedgersServiceCreateRequest.md) \| `PlainMessage`\<[`LedgersServiceCreateRequest`](LedgersServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`LedgersServiceCreateRequest`](LedgersServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LedgersServiceCreateRequest`](LedgersServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`LedgersServiceCreateRequest`](LedgersServiceCreateRequest.md) \| `PlainMessage`\<[`LedgersServiceCreateRequest`](LedgersServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`LedgersServiceCreateRequest`](LedgersServiceCreateRequest.md) \| `PlainMessage`\<[`LedgersServiceCreateRequest`](LedgersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/ledgers.scailo_pb.ts:170](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L170)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LedgersServiceCreateRequest`](LedgersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LedgersServiceCreateRequest`](LedgersServiceCreateRequest.md)

#### Defined in

[src/ledgers.scailo_pb.ts:158](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L158)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LedgersServiceCreateRequest`](LedgersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LedgersServiceCreateRequest`](LedgersServiceCreateRequest.md)

#### Defined in

[src/ledgers.scailo_pb.ts:162](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L162)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LedgersServiceCreateRequest`](LedgersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LedgersServiceCreateRequest`](LedgersServiceCreateRequest.md)

#### Defined in

[src/ledgers.scailo_pb.ts:166](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/ledgers.scailo_pb.ts#L166)
