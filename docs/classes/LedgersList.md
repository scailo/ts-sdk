[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / LedgersList

# Class: LedgersList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.LedgersList

## Hierarchy

- `Message`\<[`LedgersList`](LedgersList.md)\>

  ↳ **`LedgersList`**

## Table of contents

### Constructors

- [constructor](LedgersList.md#constructor)

### Properties

- [list](LedgersList.md#list)
- [fields](LedgersList.md#fields)
- [runtime](LedgersList.md#runtime)
- [typeName](LedgersList.md#typename)

### Methods

- [clone](LedgersList.md#clone)
- [equals](LedgersList.md#equals)
- [fromBinary](LedgersList.md#frombinary)
- [fromJson](LedgersList.md#fromjson)
- [fromJsonString](LedgersList.md#fromjsonstring)
- [getType](LedgersList.md#gettype)
- [toBinary](LedgersList.md#tobinary)
- [toJSON](LedgersList.md#tojson)
- [toJson](LedgersList.md#tojson-1)
- [toJsonString](LedgersList.md#tojsonstring)
- [equals](LedgersList.md#equals-1)
- [fromBinary](LedgersList.md#frombinary-1)
- [fromJson](LedgersList.md#fromjson-1)
- [fromJsonString](LedgersList.md#fromjsonstring-1)

## Constructors

### constructor

• **new LedgersList**(`data?`): [`LedgersList`](LedgersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LedgersList`](LedgersList.md)\> |

#### Returns

[`LedgersList`](LedgersList.md)

#### Overrides

Message\&lt;LedgersList\&gt;.constructor

#### Defined in

src/ledgers.scailo_pb.ts:377

## Properties

### list

• **list**: [`Ledger`](Ledger.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.Ledger list = 1;

#### Defined in

src/ledgers.scailo_pb.ts:375

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/ledgers.scailo_pb.ts:384

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/ledgers.scailo_pb.ts:382

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LedgersList"``

#### Defined in

src/ledgers.scailo_pb.ts:383

## Methods

### clone

▸ **clone**(): [`LedgersList`](LedgersList.md)

Create a deep copy.

#### Returns

[`LedgersList`](LedgersList.md)

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
| `other` | `undefined` \| ``null`` \| [`LedgersList`](LedgersList.md) \| `PlainMessage`\<[`LedgersList`](LedgersList.md)\> |

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

▸ **getType**(): `MessageType`\<[`LedgersList`](LedgersList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LedgersList`](LedgersList.md)\>

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
| `a` | `undefined` \| [`LedgersList`](LedgersList.md) \| `PlainMessage`\<[`LedgersList`](LedgersList.md)\> |
| `b` | `undefined` \| [`LedgersList`](LedgersList.md) \| `PlainMessage`\<[`LedgersList`](LedgersList.md)\> |

#### Returns

`boolean`

#### Defined in

src/ledgers.scailo_pb.ts:400

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LedgersList`](LedgersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LedgersList`](LedgersList.md)

#### Defined in

src/ledgers.scailo_pb.ts:388

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LedgersList`](LedgersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LedgersList`](LedgersList.md)

#### Defined in

src/ledgers.scailo_pb.ts:392

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LedgersList`](LedgersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LedgersList`](LedgersList.md)

#### Defined in

src/ledgers.scailo_pb.ts:396
