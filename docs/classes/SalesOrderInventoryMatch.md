[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrderInventoryMatch

# Class: SalesOrderInventoryMatch

Describes the parameters that are part of a sales order's inventory match

**`Generated`**

from message Scailo.SalesOrderInventoryMatch

## Hierarchy

- `Message`\<[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)\>

  ↳ **`SalesOrderInventoryMatch`**

## Table of contents

### Constructors

- [constructor](SalesOrderInventoryMatch.md#constructor)

### Properties

- [credited](SalesOrderInventoryMatch.md#credited)
- [dispatched](SalesOrderInventoryMatch.md#dispatched)
- [familyId](SalesOrderInventoryMatch.md#familyid)
- [invoiced](SalesOrderInventoryMatch.md#invoiced)
- [ordered](SalesOrderInventoryMatch.md#ordered)
- [returned](SalesOrderInventoryMatch.md#returned)
- [fields](SalesOrderInventoryMatch.md#fields)
- [runtime](SalesOrderInventoryMatch.md#runtime)
- [typeName](SalesOrderInventoryMatch.md#typename)

### Methods

- [clone](SalesOrderInventoryMatch.md#clone)
- [equals](SalesOrderInventoryMatch.md#equals)
- [fromBinary](SalesOrderInventoryMatch.md#frombinary)
- [fromJson](SalesOrderInventoryMatch.md#fromjson)
- [fromJsonString](SalesOrderInventoryMatch.md#fromjsonstring)
- [getType](SalesOrderInventoryMatch.md#gettype)
- [toBinary](SalesOrderInventoryMatch.md#tobinary)
- [toJSON](SalesOrderInventoryMatch.md#tojson)
- [toJson](SalesOrderInventoryMatch.md#tojson-1)
- [toJsonString](SalesOrderInventoryMatch.md#tojsonstring)
- [equals](SalesOrderInventoryMatch.md#equals-1)
- [fromBinary](SalesOrderInventoryMatch.md#frombinary-1)
- [fromJson](SalesOrderInventoryMatch.md#fromjson-1)
- [fromJsonString](SalesOrderInventoryMatch.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrderInventoryMatch**(`data?`): [`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)\> |

#### Returns

[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)

#### Overrides

Message\&lt;SalesOrderInventoryMatch\&gt;.constructor

#### Defined in

src/sales_orders.scailo_pb.ts:3329

## Properties

### credited

• **credited**: `bigint` = `protoInt64.zero`

Stores the credited quantity

**`Generated`**

from field: uint64 credited = 14;

#### Defined in

src/sales_orders.scailo_pb.ts:3327

___

### dispatched

• **dispatched**: `bigint` = `protoInt64.zero`

Stores the dispatched quantity

**`Generated`**

from field: uint64 dispatched = 11;

#### Defined in

src/sales_orders.scailo_pb.ts:3306

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

src/sales_orders.scailo_pb.ts:3292

___

### invoiced

• **invoiced**: `bigint` = `protoInt64.zero`

Stores the invoiced quantity

**`Generated`**

from field: uint64 invoiced = 12;

#### Defined in

src/sales_orders.scailo_pb.ts:3313

___

### ordered

• **ordered**: `bigint` = `protoInt64.zero`

Stores the ordered quantity

**`Generated`**

from field: uint64 ordered = 10;

#### Defined in

src/sales_orders.scailo_pb.ts:3299

___

### returned

• **returned**: `bigint` = `protoInt64.zero`

Stores the returned quantity

**`Generated`**

from field: uint64 returned = 13;

#### Defined in

src/sales_orders.scailo_pb.ts:3320

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_orders.scailo_pb.ts:3336

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_orders.scailo_pb.ts:3334

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrderInventoryMatch"``

#### Defined in

src/sales_orders.scailo_pb.ts:3335

## Methods

### clone

▸ **clone**(): [`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)

Create a deep copy.

#### Returns

[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md) \| `PlainMessage`\<[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)\>

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
| `a` | `undefined` \| [`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md) \| `PlainMessage`\<[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)\> |
| `b` | `undefined` \| [`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md) \| `PlainMessage`\<[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_orders.scailo_pb.ts:3357

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)

#### Defined in

src/sales_orders.scailo_pb.ts:3345

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)

#### Defined in

src/sales_orders.scailo_pb.ts:3349

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)

#### Defined in

src/sales_orders.scailo_pb.ts:3353
