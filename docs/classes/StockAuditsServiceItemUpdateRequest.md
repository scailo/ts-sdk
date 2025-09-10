[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockAuditsServiceItemUpdateRequest

# Class: StockAuditsServiceItemUpdateRequest

Describes the parameters required to update an item in a stock audit

**`Generated`**

from message Scailo.StockAuditsServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`StockAuditsServiceItemUpdateRequest`](StockAuditsServiceItemUpdateRequest.md)\>

  ↳ **`StockAuditsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](StockAuditsServiceItemUpdateRequest.md#constructor)

### Properties

- [id](StockAuditsServiceItemUpdateRequest.md#id)
- [itemHash](StockAuditsServiceItemUpdateRequest.md#itemhash)
- [physicalQuantity](StockAuditsServiceItemUpdateRequest.md#physicalquantity)
- [reconciliationReason](StockAuditsServiceItemUpdateRequest.md#reconciliationreason)
- [userComment](StockAuditsServiceItemUpdateRequest.md#usercomment)
- [fields](StockAuditsServiceItemUpdateRequest.md#fields)
- [runtime](StockAuditsServiceItemUpdateRequest.md#runtime)
- [typeName](StockAuditsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](StockAuditsServiceItemUpdateRequest.md#clone)
- [equals](StockAuditsServiceItemUpdateRequest.md#equals)
- [fromBinary](StockAuditsServiceItemUpdateRequest.md#frombinary)
- [fromJson](StockAuditsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](StockAuditsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](StockAuditsServiceItemUpdateRequest.md#gettype)
- [toBinary](StockAuditsServiceItemUpdateRequest.md#tobinary)
- [toJSON](StockAuditsServiceItemUpdateRequest.md#tojson)
- [toJson](StockAuditsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](StockAuditsServiceItemUpdateRequest.md#tojsonstring)
- [equals](StockAuditsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](StockAuditsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](StockAuditsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](StockAuditsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockAuditsServiceItemUpdateRequest**(`data?`): [`StockAuditsServiceItemUpdateRequest`](StockAuditsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockAuditsServiceItemUpdateRequest`](StockAuditsServiceItemUpdateRequest.md)\> |

#### Returns

[`StockAuditsServiceItemUpdateRequest`](StockAuditsServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;StockAuditsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

src/stock_audits.scailo_pb.ts:634

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/stock_audits.scailo_pb.ts:609

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 12;

#### Defined in

src/stock_audits.scailo_pb.ts:616

___

### physicalQuantity

• **physicalQuantity**: `bigint` = `protoInt64.zero`

The physically available quantity (in cents)

**`Generated`**

from field: uint64 physical_quantity = 13;

#### Defined in

src/stock_audits.scailo_pb.ts:623

___

### reconciliationReason

• **reconciliationReason**: `string` = `""`

The digitally available quantity (in cents)
uint64 digital_quantity = 14 [(buf.validate.field).uint64.gt = 0];
The reason for reconciliation

**`Generated`**

from field: string reconciliation_reason = 15;

#### Defined in

src/stock_audits.scailo_pb.ts:632

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/stock_audits.scailo_pb.ts:602

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_audits.scailo_pb.ts:641

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_audits.scailo_pb.ts:639

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockAuditsServiceItemUpdateRequest"``

#### Defined in

src/stock_audits.scailo_pb.ts:640

## Methods

### clone

▸ **clone**(): [`StockAuditsServiceItemUpdateRequest`](StockAuditsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`StockAuditsServiceItemUpdateRequest`](StockAuditsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockAuditsServiceItemUpdateRequest`](StockAuditsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`StockAuditsServiceItemUpdateRequest`](StockAuditsServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockAuditsServiceItemUpdateRequest`](StockAuditsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockAuditsServiceItemUpdateRequest`](StockAuditsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`StockAuditsServiceItemUpdateRequest`](StockAuditsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`StockAuditsServiceItemUpdateRequest`](StockAuditsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`StockAuditsServiceItemUpdateRequest`](StockAuditsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`StockAuditsServiceItemUpdateRequest`](StockAuditsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_audits.scailo_pb.ts:661

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockAuditsServiceItemUpdateRequest`](StockAuditsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockAuditsServiceItemUpdateRequest`](StockAuditsServiceItemUpdateRequest.md)

#### Defined in

src/stock_audits.scailo_pb.ts:649

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockAuditsServiceItemUpdateRequest`](StockAuditsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsServiceItemUpdateRequest`](StockAuditsServiceItemUpdateRequest.md)

#### Defined in

src/stock_audits.scailo_pb.ts:653

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockAuditsServiceItemUpdateRequest`](StockAuditsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsServiceItemUpdateRequest`](StockAuditsServiceItemUpdateRequest.md)

#### Defined in

src/stock_audits.scailo_pb.ts:657
