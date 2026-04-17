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

[src/ledgers.scailo_pb.ts:150](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/ledgers.scailo_pb.ts#L150)

## Properties

### code

• **code**: `string` = `""`

The unique code by which the ledger is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/ledgers.scailo_pb.ts:127](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/ledgers.scailo_pb.ts#L127)

___

### description

• **description**: `string` = `""`

The description of the ledger

**`Generated`**

from field: string description = 14;

#### Defined in

[src/ledgers.scailo_pb.ts:148](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/ledgers.scailo_pb.ts#L148)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/ledgers.scailo_pb.ts:106](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/ledgers.scailo_pb.ts#L106)

___

### isLeaf

• **isLeaf**: `boolean` = `false`

Stores if this is a leaf ledger or a non-leaf ledger

**`Generated`**

from field: bool is_leaf = 13;

#### Defined in

[src/ledgers.scailo_pb.ts:141](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/ledgers.scailo_pb.ts#L141)

___

### name

• **name**: `string` = `""`

The name of the ledger

**`Generated`**

from field: string name = 10;

#### Defined in

[src/ledgers.scailo_pb.ts:120](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/ledgers.scailo_pb.ts#L120)

___

### parentLedgerId

• **parentLedgerId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent ledger (0, if the first ledger that is being created is a leaf ledger)

**`Generated`**

from field: uint64 parent_ledger_id = 12;

#### Defined in

[src/ledgers.scailo_pb.ts:134](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/ledgers.scailo_pb.ts#L134)

___

### userComment

• **userComment**: `string` = `""`

Ledgers any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/ledgers.scailo_pb.ts:113](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/ledgers.scailo_pb.ts#L113)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/ledgers.scailo_pb.ts:157](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/ledgers.scailo_pb.ts#L157)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/ledgers.scailo_pb.ts:155](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/ledgers.scailo_pb.ts#L155)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LedgersServiceCreateRequest"``

#### Defined in

[src/ledgers.scailo_pb.ts:156](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/ledgers.scailo_pb.ts#L156)

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

[src/ledgers.scailo_pb.ts:179](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/ledgers.scailo_pb.ts#L179)

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

[src/ledgers.scailo_pb.ts:167](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/ledgers.scailo_pb.ts#L167)

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

[src/ledgers.scailo_pb.ts:171](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/ledgers.scailo_pb.ts#L171)

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

[src/ledgers.scailo_pb.ts:175](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/ledgers.scailo_pb.ts#L175)
