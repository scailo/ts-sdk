[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseOrderInventoryMatch

# Class: PurchaseOrderInventoryMatch

Describes the parameters that are part of a purchase order's inventory match

**`Generated`**

from message Scailo.PurchaseOrderInventoryMatch

## Hierarchy

- `Message`\<[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)\>

  ↳ **`PurchaseOrderInventoryMatch`**

## Table of contents

### Constructors

- [constructor](PurchaseOrderInventoryMatch.md#constructor)

### Properties

- [debited](PurchaseOrderInventoryMatch.md#debited)
- [familyId](PurchaseOrderInventoryMatch.md#familyid)
- [invoiced](PurchaseOrderInventoryMatch.md#invoiced)
- [ordered](PurchaseOrderInventoryMatch.md#ordered)
- [received](PurchaseOrderInventoryMatch.md#received)
- [returned](PurchaseOrderInventoryMatch.md#returned)
- [fields](PurchaseOrderInventoryMatch.md#fields)
- [runtime](PurchaseOrderInventoryMatch.md#runtime)
- [typeName](PurchaseOrderInventoryMatch.md#typename)

### Methods

- [clone](PurchaseOrderInventoryMatch.md#clone)
- [equals](PurchaseOrderInventoryMatch.md#equals)
- [fromBinary](PurchaseOrderInventoryMatch.md#frombinary)
- [fromJson](PurchaseOrderInventoryMatch.md#fromjson)
- [fromJsonString](PurchaseOrderInventoryMatch.md#fromjsonstring)
- [getType](PurchaseOrderInventoryMatch.md#gettype)
- [toBinary](PurchaseOrderInventoryMatch.md#tobinary)
- [toJSON](PurchaseOrderInventoryMatch.md#tojson)
- [toJson](PurchaseOrderInventoryMatch.md#tojson-1)
- [toJsonString](PurchaseOrderInventoryMatch.md#tojsonstring)
- [equals](PurchaseOrderInventoryMatch.md#equals-1)
- [fromBinary](PurchaseOrderInventoryMatch.md#frombinary-1)
- [fromJson](PurchaseOrderInventoryMatch.md#fromjson-1)
- [fromJsonString](PurchaseOrderInventoryMatch.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseOrderInventoryMatch**(`data?`): [`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)\> |

#### Returns

[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)

#### Overrides

Message\&lt;PurchaseOrderInventoryMatch\&gt;.constructor

#### Defined in

src/purchases_orders.scailo_pb.ts:3336

## Properties

### debited

• **debited**: `bigint` = `protoInt64.zero`

Stores the debited quantity

**`Generated`**

from field: uint64 debited = 14;

#### Defined in

src/purchases_orders.scailo_pb.ts:3334

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

src/purchases_orders.scailo_pb.ts:3299

___

### invoiced

• **invoiced**: `bigint` = `protoInt64.zero`

Stores the invoiced quantity

**`Generated`**

from field: uint64 invoiced = 12;

#### Defined in

src/purchases_orders.scailo_pb.ts:3320

___

### ordered

• **ordered**: `bigint` = `protoInt64.zero`

Stores the ordered quantity

**`Generated`**

from field: uint64 ordered = 10;

#### Defined in

src/purchases_orders.scailo_pb.ts:3306

___

### received

• **received**: `bigint` = `protoInt64.zero`

Stores the received quantity

**`Generated`**

from field: uint64 received = 11;

#### Defined in

src/purchases_orders.scailo_pb.ts:3313

___

### returned

• **returned**: `bigint` = `protoInt64.zero`

Stores the returned quantity

**`Generated`**

from field: uint64 returned = 13;

#### Defined in

src/purchases_orders.scailo_pb.ts:3327

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_orders.scailo_pb.ts:3343

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_orders.scailo_pb.ts:3341

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseOrderInventoryMatch"``

#### Defined in

src/purchases_orders.scailo_pb.ts:3342

## Methods

### clone

▸ **clone**(): [`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)

Create a deep copy.

#### Returns

[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md) \| `PlainMessage`\<[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)\>

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
| `a` | `undefined` \| [`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md) \| `PlainMessage`\<[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)\> |
| `b` | `undefined` \| [`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md) \| `PlainMessage`\<[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_orders.scailo_pb.ts:3364

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:3352

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:3356

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:3360
