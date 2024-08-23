[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / StockAuditsList

# Class: StockAuditsList

Describes the message consisting of the list of stock audits

**`Generated`**

from message Scailo.StockAuditsList

## Hierarchy

- `Message`\<[`StockAuditsList`](StockAuditsList.md)\>

  ↳ **`StockAuditsList`**

## Table of contents

### Constructors

- [constructor](StockAuditsList.md#constructor)

### Properties

- [list](StockAuditsList.md#list)
- [fields](StockAuditsList.md#fields)
- [runtime](StockAuditsList.md#runtime)
- [typeName](StockAuditsList.md#typename)

### Methods

- [clone](StockAuditsList.md#clone)
- [equals](StockAuditsList.md#equals)
- [fromBinary](StockAuditsList.md#frombinary)
- [fromJson](StockAuditsList.md#fromjson)
- [fromJsonString](StockAuditsList.md#fromjsonstring)
- [getType](StockAuditsList.md#gettype)
- [toBinary](StockAuditsList.md#tobinary)
- [toJSON](StockAuditsList.md#tojson)
- [toJson](StockAuditsList.md#tojson-1)
- [toJsonString](StockAuditsList.md#tojsonstring)
- [equals](StockAuditsList.md#equals-1)
- [fromBinary](StockAuditsList.md#frombinary-1)
- [fromJson](StockAuditsList.md#fromjson-1)
- [fromJsonString](StockAuditsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockAuditsList**(`data?`): [`StockAuditsList`](StockAuditsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockAuditsList`](StockAuditsList.md)\> |

#### Returns

[`StockAuditsList`](StockAuditsList.md)

#### Overrides

Message\&lt;StockAuditsList\&gt;.constructor

#### Defined in

src/stock_audits.scailo_pb.ts:802

## Properties

### list

• **list**: [`StockAudit`](StockAudit.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.StockAudit list = 1;

#### Defined in

src/stock_audits.scailo_pb.ts:800

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_audits.scailo_pb.ts:809

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_audits.scailo_pb.ts:807

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockAuditsList"``

#### Defined in

src/stock_audits.scailo_pb.ts:808

## Methods

### clone

▸ **clone**(): [`StockAuditsList`](StockAuditsList.md)

Create a deep copy.

#### Returns

[`StockAuditsList`](StockAuditsList.md)

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
| `other` | `undefined` \| ``null`` \| [`StockAuditsList`](StockAuditsList.md) \| `PlainMessage`\<[`StockAuditsList`](StockAuditsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockAuditsList`](StockAuditsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockAuditsList`](StockAuditsList.md)\>

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
| `a` | `undefined` \| [`StockAuditsList`](StockAuditsList.md) \| `PlainMessage`\<[`StockAuditsList`](StockAuditsList.md)\> |
| `b` | `undefined` \| [`StockAuditsList`](StockAuditsList.md) \| `PlainMessage`\<[`StockAuditsList`](StockAuditsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_audits.scailo_pb.ts:825

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockAuditsList`](StockAuditsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockAuditsList`](StockAuditsList.md)

#### Defined in

src/stock_audits.scailo_pb.ts:813

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockAuditsList`](StockAuditsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsList`](StockAuditsList.md)

#### Defined in

src/stock_audits.scailo_pb.ts:817

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockAuditsList`](StockAuditsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsList`](StockAuditsList.md)

#### Defined in

src/stock_audits.scailo_pb.ts:821
