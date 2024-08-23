[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / StockAuditsItemsList

# Class: StockAuditsItemsList

Describes the message consisting of the list of stock audit items

**`Generated`**

from message Scailo.StockAuditsItemsList

## Hierarchy

- `Message`\<[`StockAuditsItemsList`](StockAuditsItemsList.md)\>

  ↳ **`StockAuditsItemsList`**

## Table of contents

### Constructors

- [constructor](StockAuditsItemsList.md#constructor)

### Properties

- [list](StockAuditsItemsList.md#list)
- [fields](StockAuditsItemsList.md#fields)
- [runtime](StockAuditsItemsList.md#runtime)
- [typeName](StockAuditsItemsList.md#typename)

### Methods

- [clone](StockAuditsItemsList.md#clone)
- [equals](StockAuditsItemsList.md#equals)
- [fromBinary](StockAuditsItemsList.md#frombinary)
- [fromJson](StockAuditsItemsList.md#fromjson)
- [fromJsonString](StockAuditsItemsList.md#fromjsonstring)
- [getType](StockAuditsItemsList.md#gettype)
- [toBinary](StockAuditsItemsList.md#tobinary)
- [toJSON](StockAuditsItemsList.md#tojson)
- [toJson](StockAuditsItemsList.md#tojson-1)
- [toJsonString](StockAuditsItemsList.md#tojsonstring)
- [equals](StockAuditsItemsList.md#equals-1)
- [fromBinary](StockAuditsItemsList.md#frombinary-1)
- [fromJson](StockAuditsItemsList.md#fromjson-1)
- [fromJsonString](StockAuditsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockAuditsItemsList**(`data?`): [`StockAuditsItemsList`](StockAuditsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockAuditsItemsList`](StockAuditsItemsList.md)\> |

#### Returns

[`StockAuditsItemsList`](StockAuditsItemsList.md)

#### Overrides

Message\&lt;StockAuditsItemsList\&gt;.constructor

#### Defined in

src/stock_audits.scailo_pb.ts:844

## Properties

### list

• **list**: [`StockAuditItem`](StockAuditItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.StockAuditItem list = 1;

#### Defined in

src/stock_audits.scailo_pb.ts:842

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_audits.scailo_pb.ts:851

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_audits.scailo_pb.ts:849

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockAuditsItemsList"``

#### Defined in

src/stock_audits.scailo_pb.ts:850

## Methods

### clone

▸ **clone**(): [`StockAuditsItemsList`](StockAuditsItemsList.md)

Create a deep copy.

#### Returns

[`StockAuditsItemsList`](StockAuditsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`StockAuditsItemsList`](StockAuditsItemsList.md) \| `PlainMessage`\<[`StockAuditsItemsList`](StockAuditsItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockAuditsItemsList`](StockAuditsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockAuditsItemsList`](StockAuditsItemsList.md)\>

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
| `a` | `undefined` \| [`StockAuditsItemsList`](StockAuditsItemsList.md) \| `PlainMessage`\<[`StockAuditsItemsList`](StockAuditsItemsList.md)\> |
| `b` | `undefined` \| [`StockAuditsItemsList`](StockAuditsItemsList.md) \| `PlainMessage`\<[`StockAuditsItemsList`](StockAuditsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_audits.scailo_pb.ts:867

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockAuditsItemsList`](StockAuditsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockAuditsItemsList`](StockAuditsItemsList.md)

#### Defined in

src/stock_audits.scailo_pb.ts:855

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockAuditsItemsList`](StockAuditsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsItemsList`](StockAuditsItemsList.md)

#### Defined in

src/stock_audits.scailo_pb.ts:859

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockAuditsItemsList`](StockAuditsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsItemsList`](StockAuditsItemsList.md)

#### Defined in

src/stock_audits.scailo_pb.ts:863
