[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesReturnItem

# Class: SalesReturnItem

Describes the parameters that constitute an item associated to a sales return

**`Generated`**

from message Scailo.SalesReturnItem

## Hierarchy

- `Message`\<[`SalesReturnItem`](SalesReturnItem.md)\>

  ↳ **`SalesReturnItem`**

## Table of contents

### Constructors

- [constructor](SalesReturnItem.md#constructor)

### Properties

- [approvalMetadata](SalesReturnItem.md#approvalmetadata)
- [clientQuantity](SalesReturnItem.md#clientquantity)
- [clientUomId](SalesReturnItem.md#clientuomid)
- [entityUuid](SalesReturnItem.md#entityuuid)
- [familyId](SalesReturnItem.md#familyid)
- [internalQuantity](SalesReturnItem.md#internalquantity)
- [itemHash](SalesReturnItem.md#itemhash)
- [metadata](SalesReturnItem.md#metadata)
- [needApproval](SalesReturnItem.md#needapproval)
- [salesReturnId](SalesReturnItem.md#salesreturnid)
- [userComment](SalesReturnItem.md#usercomment)
- [fields](SalesReturnItem.md#fields)
- [runtime](SalesReturnItem.md#runtime)
- [typeName](SalesReturnItem.md#typename)

### Methods

- [clone](SalesReturnItem.md#clone)
- [equals](SalesReturnItem.md#equals)
- [fromBinary](SalesReturnItem.md#frombinary)
- [fromJson](SalesReturnItem.md#fromjson)
- [fromJsonString](SalesReturnItem.md#fromjsonstring)
- [getType](SalesReturnItem.md#gettype)
- [toBinary](SalesReturnItem.md#tobinary)
- [toJSON](SalesReturnItem.md#tojson)
- [toJson](SalesReturnItem.md#tojson-1)
- [toJsonString](SalesReturnItem.md#tojsonstring)
- [equals](SalesReturnItem.md#equals-1)
- [fromBinary](SalesReturnItem.md#frombinary-1)
- [fromJson](SalesReturnItem.md#fromjson-1)
- [fromJsonString](SalesReturnItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnItem**(`data?`): [`SalesReturnItem`](SalesReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesReturnItem`](SalesReturnItem.md)\> |

#### Returns

[`SalesReturnItem`](SalesReturnItem.md)

#### Overrides

Message\&lt;SalesReturnItem\&gt;.constructor

#### Defined in

[src/sales_returns.scailo_pb.ts:989](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_returns.scailo_pb.ts#L989)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_returns.scailo_pb.ts:930](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_returns.scailo_pb.ts#L930)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being dispatched in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

[src/sales_returns.scailo_pb.ts:987](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_returns.scailo_pb.ts#L987)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

[src/sales_returns.scailo_pb.ts:980](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_returns.scailo_pb.ts#L980)

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

[src/sales_returns.scailo_pb.ts:914](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_returns.scailo_pb.ts#L914)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/sales_returns.scailo_pb.ts:959](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_returns.scailo_pb.ts#L959)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being dispatched in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

[src/sales_returns.scailo_pb.ts:973](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_returns.scailo_pb.ts#L973)

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 12;

#### Defined in

[src/sales_returns.scailo_pb.ts:966](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_returns.scailo_pb.ts#L966)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_returns.scailo_pb.ts:922](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_returns.scailo_pb.ts#L922)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

The approval state of the record

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/sales_returns.scailo_pb.ts:938](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_returns.scailo_pb.ts#L938)

___

### salesReturnId

• **salesReturnId**: `bigint` = `protoInt64.zero`

Stores the sales return ID

**`Generated`**

from field: uint64 sales_return_id = 10;

#### Defined in

[src/sales_returns.scailo_pb.ts:952](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_returns.scailo_pb.ts#L952)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/sales_returns.scailo_pb.ts:945](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_returns.scailo_pb.ts#L945)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_returns.scailo_pb.ts:996](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_returns.scailo_pb.ts#L996)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_returns.scailo_pb.ts:994](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_returns.scailo_pb.ts#L994)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesReturnItem"``

#### Defined in

[src/sales_returns.scailo_pb.ts:995](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_returns.scailo_pb.ts#L995)

## Methods

### clone

▸ **clone**(): [`SalesReturnItem`](SalesReturnItem.md)

Create a deep copy.

#### Returns

[`SalesReturnItem`](SalesReturnItem.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnItem`](SalesReturnItem.md) \| `PlainMessage`\<[`SalesReturnItem`](SalesReturnItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesReturnItem`](SalesReturnItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesReturnItem`](SalesReturnItem.md)\>

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
| `a` | `undefined` \| [`SalesReturnItem`](SalesReturnItem.md) \| `PlainMessage`\<[`SalesReturnItem`](SalesReturnItem.md)\> |
| `b` | `undefined` \| [`SalesReturnItem`](SalesReturnItem.md) \| `PlainMessage`\<[`SalesReturnItem`](SalesReturnItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_returns.scailo_pb.ts:1022](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_returns.scailo_pb.ts#L1022)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnItem`](SalesReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnItem`](SalesReturnItem.md)

#### Defined in

[src/sales_returns.scailo_pb.ts:1010](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_returns.scailo_pb.ts#L1010)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnItem`](SalesReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnItem`](SalesReturnItem.md)

#### Defined in

[src/sales_returns.scailo_pb.ts:1014](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_returns.scailo_pb.ts#L1014)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnItem`](SalesReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnItem`](SalesReturnItem.md)

#### Defined in

[src/sales_returns.scailo_pb.ts:1018](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_returns.scailo_pb.ts#L1018)
