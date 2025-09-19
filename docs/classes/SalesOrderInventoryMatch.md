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

- [clientUomId](SalesOrderInventoryMatch.md#clientuomid)
- [creditedPrimary](SalesOrderInventoryMatch.md#creditedprimary)
- [creditedSecondary](SalesOrderInventoryMatch.md#creditedsecondary)
- [dispatchedPrimary](SalesOrderInventoryMatch.md#dispatchedprimary)
- [dispatchedSecondary](SalesOrderInventoryMatch.md#dispatchedsecondary)
- [familyId](SalesOrderInventoryMatch.md#familyid)
- [invoicedPrimary](SalesOrderInventoryMatch.md#invoicedprimary)
- [invoicedSecondary](SalesOrderInventoryMatch.md#invoicedsecondary)
- [orderedPrimary](SalesOrderInventoryMatch.md#orderedprimary)
- [orderedSecondary](SalesOrderInventoryMatch.md#orderedsecondary)
- [returnedPrimary](SalesOrderInventoryMatch.md#returnedprimary)
- [returnedSecondary](SalesOrderInventoryMatch.md#returnedsecondary)
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

[src/sales_orders.scailo_pb.ts:3395](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3395)

## Properties

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the client unit of material ID

**`Generated`**

from field: uint64 client_uom_id = 2;

#### Defined in

[src/sales_orders.scailo_pb.ts:3323](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3323)

___

### creditedPrimary

• **creditedPrimary**: `bigint` = `protoInt64.zero`

Stores the credited quantity in primary unit of material

**`Generated`**

from field: uint64 credited_primary = 14;

#### Defined in

[src/sales_orders.scailo_pb.ts:3386](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3386)

___

### creditedSecondary

• **creditedSecondary**: `bigint` = `protoInt64.zero`

Stores the credited quantity in secondary unit of material

**`Generated`**

from field: uint64 credited_secondary = 24;

#### Defined in

[src/sales_orders.scailo_pb.ts:3393](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3393)

___

### dispatchedPrimary

• **dispatchedPrimary**: `bigint` = `protoInt64.zero`

Stores the dispatched quantity in primary unit of material

**`Generated`**

from field: uint64 dispatched_primary = 11;

#### Defined in

[src/sales_orders.scailo_pb.ts:3344](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3344)

___

### dispatchedSecondary

• **dispatchedSecondary**: `bigint` = `protoInt64.zero`

Stores the dispatched quantity in secondary unit of material

**`Generated`**

from field: uint64 dispatched_secondary = 21;

#### Defined in

[src/sales_orders.scailo_pb.ts:3351](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3351)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

[src/sales_orders.scailo_pb.ts:3316](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3316)

___

### invoicedPrimary

• **invoicedPrimary**: `bigint` = `protoInt64.zero`

Stores the invoiced quantity in primary unit of material

**`Generated`**

from field: uint64 invoiced_primary = 12;

#### Defined in

[src/sales_orders.scailo_pb.ts:3358](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3358)

___

### invoicedSecondary

• **invoicedSecondary**: `bigint` = `protoInt64.zero`

Stores the invoiced quantity in secondary unit of material

**`Generated`**

from field: uint64 invoiced_secondary = 22;

#### Defined in

[src/sales_orders.scailo_pb.ts:3365](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3365)

___

### orderedPrimary

• **orderedPrimary**: `bigint` = `protoInt64.zero`

Stores the ordered quantity in primary unit of material

**`Generated`**

from field: uint64 ordered_primary = 10;

#### Defined in

[src/sales_orders.scailo_pb.ts:3330](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3330)

___

### orderedSecondary

• **orderedSecondary**: `bigint` = `protoInt64.zero`

Stores the ordered quantity in secondary unit of material

**`Generated`**

from field: uint64 ordered_secondary = 20;

#### Defined in

[src/sales_orders.scailo_pb.ts:3337](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3337)

___

### returnedPrimary

• **returnedPrimary**: `bigint` = `protoInt64.zero`

Stores the returned quantity in primary unit of material

**`Generated`**

from field: uint64 returned_primary = 13;

#### Defined in

[src/sales_orders.scailo_pb.ts:3372](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3372)

___

### returnedSecondary

• **returnedSecondary**: `bigint` = `protoInt64.zero`

Stores the returned quantity in secondary unit of material

**`Generated`**

from field: uint64 returned_secondary = 23;

#### Defined in

[src/sales_orders.scailo_pb.ts:3379](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3379)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:3402](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3402)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:3400](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3400)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrderInventoryMatch"``

#### Defined in

[src/sales_orders.scailo_pb.ts:3401](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3401)

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

[src/sales_orders.scailo_pb.ts:3429](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3429)

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

[src/sales_orders.scailo_pb.ts:3417](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3417)

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

[src/sales_orders.scailo_pb.ts:3421](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3421)

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

[src/sales_orders.scailo_pb.ts:3425](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L3425)
