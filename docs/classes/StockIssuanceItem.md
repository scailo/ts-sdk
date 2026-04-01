[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockIssuanceItem

# Class: StockIssuanceItem

Describes the parameters that constitute an item associated to a stock issuance

**`Generated`**

from message Scailo.StockIssuanceItem

## Hierarchy

- `Message`\<[`StockIssuanceItem`](StockIssuanceItem.md)\>

  ↳ **`StockIssuanceItem`**

## Table of contents

### Constructors

- [constructor](StockIssuanceItem.md#constructor)

### Properties

- [approvalMetadata](StockIssuanceItem.md#approvalmetadata)
- [entityUuid](StockIssuanceItem.md#entityuuid)
- [familyId](StockIssuanceItem.md#familyid)
- [internalQuantity](StockIssuanceItem.md#internalquantity)
- [itemHash](StockIssuanceItem.md#itemhash)
- [metadata](StockIssuanceItem.md#metadata)
- [needApproval](StockIssuanceItem.md#needapproval)
- [stockIssuanceId](StockIssuanceItem.md#stockissuanceid)
- [userComment](StockIssuanceItem.md#usercomment)
- [fields](StockIssuanceItem.md#fields)
- [runtime](StockIssuanceItem.md#runtime)
- [typeName](StockIssuanceItem.md#typename)

### Methods

- [clone](StockIssuanceItem.md#clone)
- [equals](StockIssuanceItem.md#equals)
- [fromBinary](StockIssuanceItem.md#frombinary)
- [fromJson](StockIssuanceItem.md#fromjson)
- [fromJsonString](StockIssuanceItem.md#fromjsonstring)
- [getType](StockIssuanceItem.md#gettype)
- [toBinary](StockIssuanceItem.md#tobinary)
- [toJSON](StockIssuanceItem.md#tojson)
- [toJson](StockIssuanceItem.md#tojson-1)
- [toJsonString](StockIssuanceItem.md#tojsonstring)
- [equals](StockIssuanceItem.md#equals-1)
- [fromBinary](StockIssuanceItem.md#frombinary-1)
- [fromJson](StockIssuanceItem.md#fromjson-1)
- [fromJsonString](StockIssuanceItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuanceItem**(`data?`): [`StockIssuanceItem`](StockIssuanceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockIssuanceItem`](StockIssuanceItem.md)\> |

#### Returns

[`StockIssuanceItem`](StockIssuanceItem.md)

#### Overrides

Message\&lt;StockIssuanceItem\&gt;.constructor

#### Defined in

[src/stock_issuances.scailo_pb.ts:908](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_issuances.scailo_pb.ts#L908)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/stock_issuances.scailo_pb.ts:863](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_issuances.scailo_pb.ts#L863)

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

[src/stock_issuances.scailo_pb.ts:847](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_issuances.scailo_pb.ts#L847)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/stock_issuances.scailo_pb.ts:892](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_issuances.scailo_pb.ts#L892)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/stock_issuances.scailo_pb.ts:899](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_issuances.scailo_pb.ts#L899)

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 13;

#### Defined in

[src/stock_issuances.scailo_pb.ts:906](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_issuances.scailo_pb.ts#L906)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/stock_issuances.scailo_pb.ts:855](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_issuances.scailo_pb.ts#L855)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

The approval state of the record

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/stock_issuances.scailo_pb.ts:871](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_issuances.scailo_pb.ts#L871)

___

### stockIssuanceId

• **stockIssuanceId**: `bigint` = `protoInt64.zero`

Stores the stock issuance ID

**`Generated`**

from field: uint64 stock_issuance_id = 10;

#### Defined in

[src/stock_issuances.scailo_pb.ts:885](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_issuances.scailo_pb.ts#L885)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/stock_issuances.scailo_pb.ts:878](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_issuances.scailo_pb.ts#L878)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances.scailo_pb.ts:915](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_issuances.scailo_pb.ts#L915)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances.scailo_pb.ts:913](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_issuances.scailo_pb.ts#L913)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockIssuanceItem"``

#### Defined in

[src/stock_issuances.scailo_pb.ts:914](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_issuances.scailo_pb.ts#L914)

## Methods

### clone

▸ **clone**(): [`StockIssuanceItem`](StockIssuanceItem.md)

Create a deep copy.

#### Returns

[`StockIssuanceItem`](StockIssuanceItem.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuanceItem`](StockIssuanceItem.md) \| `PlainMessage`\<[`StockIssuanceItem`](StockIssuanceItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockIssuanceItem`](StockIssuanceItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockIssuanceItem`](StockIssuanceItem.md)\>

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
| `a` | `undefined` \| [`StockIssuanceItem`](StockIssuanceItem.md) \| `PlainMessage`\<[`StockIssuanceItem`](StockIssuanceItem.md)\> |
| `b` | `undefined` \| [`StockIssuanceItem`](StockIssuanceItem.md) \| `PlainMessage`\<[`StockIssuanceItem`](StockIssuanceItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances.scailo_pb.ts:939](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_issuances.scailo_pb.ts#L939)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuanceItem`](StockIssuanceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockIssuanceItem`](StockIssuanceItem.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:927](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_issuances.scailo_pb.ts#L927)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuanceItem`](StockIssuanceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuanceItem`](StockIssuanceItem.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:931](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_issuances.scailo_pb.ts#L931)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuanceItem`](StockIssuanceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuanceItem`](StockIssuanceItem.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:935](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/stock_issuances.scailo_pb.ts#L935)
