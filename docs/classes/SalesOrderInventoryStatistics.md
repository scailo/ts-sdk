[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrderInventoryStatistics

# Class: SalesOrderInventoryStatistics

Describes the parameters that are part of a sales order's inventory statistics payload

**`Generated`**

from message Scailo.SalesOrderInventoryStatistics

## Hierarchy

- `Message`\<[`SalesOrderInventoryStatistics`](SalesOrderInventoryStatistics.md)\>

  ↳ **`SalesOrderInventoryStatistics`**

## Table of contents

### Constructors

- [constructor](SalesOrderInventoryStatistics.md#constructor)

### Properties

- [dispatched](SalesOrderInventoryStatistics.md#dispatched)
- [ordered](SalesOrderInventoryStatistics.md#ordered)
- [returned](SalesOrderInventoryStatistics.md#returned)
- [fields](SalesOrderInventoryStatistics.md#fields)
- [runtime](SalesOrderInventoryStatistics.md#runtime)
- [typeName](SalesOrderInventoryStatistics.md#typename)

### Methods

- [clone](SalesOrderInventoryStatistics.md#clone)
- [equals](SalesOrderInventoryStatistics.md#equals)
- [fromBinary](SalesOrderInventoryStatistics.md#frombinary)
- [fromJson](SalesOrderInventoryStatistics.md#fromjson)
- [fromJsonString](SalesOrderInventoryStatistics.md#fromjsonstring)
- [getType](SalesOrderInventoryStatistics.md#gettype)
- [toBinary](SalesOrderInventoryStatistics.md#tobinary)
- [toJSON](SalesOrderInventoryStatistics.md#tojson)
- [toJson](SalesOrderInventoryStatistics.md#tojson-1)
- [toJsonString](SalesOrderInventoryStatistics.md#tojsonstring)
- [equals](SalesOrderInventoryStatistics.md#equals-1)
- [fromBinary](SalesOrderInventoryStatistics.md#frombinary-1)
- [fromJson](SalesOrderInventoryStatistics.md#fromjson-1)
- [fromJsonString](SalesOrderInventoryStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrderInventoryStatistics**(`data?`): [`SalesOrderInventoryStatistics`](SalesOrderInventoryStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrderInventoryStatistics`](SalesOrderInventoryStatistics.md)\> |

#### Returns

[`SalesOrderInventoryStatistics`](SalesOrderInventoryStatistics.md)

#### Overrides

Message\&lt;SalesOrderInventoryStatistics\&gt;.constructor

#### Defined in

src/sales_orders.scailo_pb.ts:3126

## Properties

### dispatched

• **dispatched**: `bigint` = `protoInt64.zero`

Stores the cumulative quantity of the dispatched inventory

**`Generated`**

from field: uint64 dispatched = 2;

#### Defined in

src/sales_orders.scailo_pb.ts:3117

___

### ordered

• **ordered**: `bigint` = `protoInt64.zero`

Stores the cumulative quantity of the ordered inventory

**`Generated`**

from field: uint64 ordered = 1;

#### Defined in

src/sales_orders.scailo_pb.ts:3110

___

### returned

• **returned**: `bigint` = `protoInt64.zero`

Stores the cumulative quantity of the returned inventory

**`Generated`**

from field: uint64 returned = 3;

#### Defined in

src/sales_orders.scailo_pb.ts:3124

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_orders.scailo_pb.ts:3133

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_orders.scailo_pb.ts:3131

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrderInventoryStatistics"``

#### Defined in

src/sales_orders.scailo_pb.ts:3132

## Methods

### clone

▸ **clone**(): [`SalesOrderInventoryStatistics`](SalesOrderInventoryStatistics.md)

Create a deep copy.

#### Returns

[`SalesOrderInventoryStatistics`](SalesOrderInventoryStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrderInventoryStatistics`](SalesOrderInventoryStatistics.md) \| `PlainMessage`\<[`SalesOrderInventoryStatistics`](SalesOrderInventoryStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrderInventoryStatistics`](SalesOrderInventoryStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrderInventoryStatistics`](SalesOrderInventoryStatistics.md)\>

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
| `a` | `undefined` \| [`SalesOrderInventoryStatistics`](SalesOrderInventoryStatistics.md) \| `PlainMessage`\<[`SalesOrderInventoryStatistics`](SalesOrderInventoryStatistics.md)\> |
| `b` | `undefined` \| [`SalesOrderInventoryStatistics`](SalesOrderInventoryStatistics.md) \| `PlainMessage`\<[`SalesOrderInventoryStatistics`](SalesOrderInventoryStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_orders.scailo_pb.ts:3151

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrderInventoryStatistics`](SalesOrderInventoryStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrderInventoryStatistics`](SalesOrderInventoryStatistics.md)

#### Defined in

src/sales_orders.scailo_pb.ts:3139

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrderInventoryStatistics`](SalesOrderInventoryStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderInventoryStatistics`](SalesOrderInventoryStatistics.md)

#### Defined in

src/sales_orders.scailo_pb.ts:3143

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrderInventoryStatistics`](SalesOrderInventoryStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderInventoryStatistics`](SalesOrderInventoryStatistics.md)

#### Defined in

src/sales_orders.scailo_pb.ts:3147
