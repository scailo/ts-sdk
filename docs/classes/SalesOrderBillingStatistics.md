[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrderBillingStatistics

# Class: SalesOrderBillingStatistics

Describes the parameters that are part of a sales order's billing statistics payload

**`Generated`**

from message Scailo.SalesOrderBillingStatistics

## Hierarchy

- `Message`\<[`SalesOrderBillingStatistics`](SalesOrderBillingStatistics.md)\>

  ↳ **`SalesOrderBillingStatistics`**

## Table of contents

### Constructors

- [constructor](SalesOrderBillingStatistics.md#constructor)

### Properties

- [credited](SalesOrderBillingStatistics.md#credited)
- [invoiced](SalesOrderBillingStatistics.md#invoiced)
- [ordered](SalesOrderBillingStatistics.md#ordered)
- [fields](SalesOrderBillingStatistics.md#fields)
- [runtime](SalesOrderBillingStatistics.md#runtime)
- [typeName](SalesOrderBillingStatistics.md#typename)

### Methods

- [clone](SalesOrderBillingStatistics.md#clone)
- [equals](SalesOrderBillingStatistics.md#equals)
- [fromBinary](SalesOrderBillingStatistics.md#frombinary)
- [fromJson](SalesOrderBillingStatistics.md#fromjson)
- [fromJsonString](SalesOrderBillingStatistics.md#fromjsonstring)
- [getType](SalesOrderBillingStatistics.md#gettype)
- [toBinary](SalesOrderBillingStatistics.md#tobinary)
- [toJSON](SalesOrderBillingStatistics.md#tojson)
- [toJson](SalesOrderBillingStatistics.md#tojson-1)
- [toJsonString](SalesOrderBillingStatistics.md#tojsonstring)
- [equals](SalesOrderBillingStatistics.md#equals-1)
- [fromBinary](SalesOrderBillingStatistics.md#frombinary-1)
- [fromJson](SalesOrderBillingStatistics.md#fromjson-1)
- [fromJsonString](SalesOrderBillingStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrderBillingStatistics**(`data?`): [`SalesOrderBillingStatistics`](SalesOrderBillingStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrderBillingStatistics`](SalesOrderBillingStatistics.md)\> |

#### Returns

[`SalesOrderBillingStatistics`](SalesOrderBillingStatistics.md)

#### Overrides

Message\&lt;SalesOrderBillingStatistics\&gt;.constructor

#### Defined in

[src/sales_orders.scailo_pb.ts:3274](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3274)

## Properties

### credited

• **credited**: `bigint` = `protoInt64.zero`

Stores the cumulative quantity of the credited inventory

**`Generated`**

from field: uint64 credited = 3;

#### Defined in

[src/sales_orders.scailo_pb.ts:3272](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3272)

___

### invoiced

• **invoiced**: `bigint` = `protoInt64.zero`

Stores the cumulative quantity of the invoiced inventory

**`Generated`**

from field: uint64 invoiced = 2;

#### Defined in

[src/sales_orders.scailo_pb.ts:3265](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3265)

___

### ordered

• **ordered**: `bigint` = `protoInt64.zero`

Stores the cumulative quantity of the ordered inventory

**`Generated`**

from field: uint64 ordered = 1;

#### Defined in

[src/sales_orders.scailo_pb.ts:3258](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3258)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:3281](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3281)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:3279](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3279)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrderBillingStatistics"``

#### Defined in

[src/sales_orders.scailo_pb.ts:3280](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3280)

## Methods

### clone

▸ **clone**(): [`SalesOrderBillingStatistics`](SalesOrderBillingStatistics.md)

Create a deep copy.

#### Returns

[`SalesOrderBillingStatistics`](SalesOrderBillingStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrderBillingStatistics`](SalesOrderBillingStatistics.md) \| `PlainMessage`\<[`SalesOrderBillingStatistics`](SalesOrderBillingStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrderBillingStatistics`](SalesOrderBillingStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrderBillingStatistics`](SalesOrderBillingStatistics.md)\>

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
| `a` | `undefined` \| [`SalesOrderBillingStatistics`](SalesOrderBillingStatistics.md) \| `PlainMessage`\<[`SalesOrderBillingStatistics`](SalesOrderBillingStatistics.md)\> |
| `b` | `undefined` \| [`SalesOrderBillingStatistics`](SalesOrderBillingStatistics.md) \| `PlainMessage`\<[`SalesOrderBillingStatistics`](SalesOrderBillingStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_orders.scailo_pb.ts:3299](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3299)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrderBillingStatistics`](SalesOrderBillingStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrderBillingStatistics`](SalesOrderBillingStatistics.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:3287](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3287)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrderBillingStatistics`](SalesOrderBillingStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderBillingStatistics`](SalesOrderBillingStatistics.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:3291](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3291)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrderBillingStatistics`](SalesOrderBillingStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderBillingStatistics`](SalesOrderBillingStatistics.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:3295](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3295)
