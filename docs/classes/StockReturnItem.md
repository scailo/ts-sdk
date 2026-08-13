[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockReturnItem

# Class: StockReturnItem

Describes the parameters that constitute an item associated to a stock return

**`Generated`**

from message Scailo.StockReturnItem

## Hierarchy

- `Message`\<[`StockReturnItem`](StockReturnItem.md)\>

  ↳ **`StockReturnItem`**

## Table of contents

### Constructors

- [constructor](StockReturnItem.md#constructor)

### Properties

- [approvalMetadata](StockReturnItem.md#approvalmetadata)
- [entityUuid](StockReturnItem.md#entityuuid)
- [familyId](StockReturnItem.md#familyid)
- [internalQuantity](StockReturnItem.md#internalquantity)
- [itemHash](StockReturnItem.md#itemhash)
- [metadata](StockReturnItem.md#metadata)
- [needApproval](StockReturnItem.md#needapproval)
- [remainingDimensions](StockReturnItem.md#remainingdimensions)
- [stockReturnId](StockReturnItem.md#stockreturnid)
- [userComment](StockReturnItem.md#usercomment)
- [fields](StockReturnItem.md#fields)
- [runtime](StockReturnItem.md#runtime)
- [typeName](StockReturnItem.md#typename)

### Methods

- [clone](StockReturnItem.md#clone)
- [equals](StockReturnItem.md#equals)
- [fromBinary](StockReturnItem.md#frombinary)
- [fromJson](StockReturnItem.md#fromjson)
- [fromJsonString](StockReturnItem.md#fromjsonstring)
- [getType](StockReturnItem.md#gettype)
- [toBinary](StockReturnItem.md#tobinary)
- [toJSON](StockReturnItem.md#tojson)
- [toJson](StockReturnItem.md#tojson-1)
- [toJsonString](StockReturnItem.md#tojsonstring)
- [equals](StockReturnItem.md#equals-1)
- [fromBinary](StockReturnItem.md#frombinary-1)
- [fromJson](StockReturnItem.md#fromjson-1)
- [fromJsonString](StockReturnItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockReturnItem**(`data?`): [`StockReturnItem`](StockReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockReturnItem`](StockReturnItem.md)\> |

#### Returns

[`StockReturnItem`](StockReturnItem.md)

#### Overrides

Message\&lt;StockReturnItem\&gt;.constructor

#### Defined in

[src/stock_returns.scailo_pb.ts:929](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L929)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/stock_returns.scailo_pb.ts:873](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L873)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/stock_returns.scailo_pb.ts:857](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L857)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/stock_returns.scailo_pb.ts:906](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L906)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/stock_returns.scailo_pb.ts:913](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L913)

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 13;

#### Defined in

[src/stock_returns.scailo_pb.ts:920](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L920)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/stock_returns.scailo_pb.ts:865](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L865)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

A boolean flag indicating whether this specific record requires further administrative approval.

**`Example`**

```ts
false
```

**`Format`**

Boolean true or false.

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/stock_returns.scailo_pb.ts:885](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L885)

___

### remainingDimensions

• **remainingDimensions**: `string` = `""`

The remaining dimensions of the item (if applicable)

**`Generated`**

from field: string remaining_dimensions = 14;

#### Defined in

[src/stock_returns.scailo_pb.ts:927](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L927)

___

### stockReturnId

• **stockReturnId**: `bigint` = `protoInt64.zero`

Stores the stock return ID

**`Generated`**

from field: uint64 stock_return_id = 10;

#### Defined in

[src/stock_returns.scailo_pb.ts:899](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L899)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/stock_returns.scailo_pb.ts:892](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L892)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_returns.scailo_pb.ts:936](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L936)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_returns.scailo_pb.ts:934](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L934)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockReturnItem"``

#### Defined in

[src/stock_returns.scailo_pb.ts:935](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L935)

## Methods

### clone

▸ **clone**(): [`StockReturnItem`](StockReturnItem.md)

Create a deep copy.

#### Returns

[`StockReturnItem`](StockReturnItem.md)

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
| `other` | `undefined` \| ``null`` \| [`StockReturnItem`](StockReturnItem.md) \| `PlainMessage`\<[`StockReturnItem`](StockReturnItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockReturnItem`](StockReturnItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockReturnItem`](StockReturnItem.md)\>

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
| `a` | `undefined` \| [`StockReturnItem`](StockReturnItem.md) \| `PlainMessage`\<[`StockReturnItem`](StockReturnItem.md)\> |
| `b` | `undefined` \| [`StockReturnItem`](StockReturnItem.md) \| `PlainMessage`\<[`StockReturnItem`](StockReturnItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_returns.scailo_pb.ts:961](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L961)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockReturnItem`](StockReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockReturnItem`](StockReturnItem.md)

#### Defined in

[src/stock_returns.scailo_pb.ts:949](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L949)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockReturnItem`](StockReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnItem`](StockReturnItem.md)

#### Defined in

[src/stock_returns.scailo_pb.ts:953](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L953)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockReturnItem`](StockReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnItem`](StockReturnItem.md)

#### Defined in

[src/stock_returns.scailo_pb.ts:957](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_returns.scailo_pb.ts#L957)
