[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseOrderContact

# Class: PurchaseOrderContact

Describes the parameters that constitute a purchase order contact

**`Generated`**

from message Scailo.PurchaseOrderContact

## Hierarchy

- `Message`\<[`PurchaseOrderContact`](PurchaseOrderContact.md)\>

  ↳ **`PurchaseOrderContact`**

## Table of contents

### Constructors

- [constructor](PurchaseOrderContact.md#constructor)

### Properties

- [approvalMetadata](PurchaseOrderContact.md#approvalmetadata)
- [associateId](PurchaseOrderContact.md#associateid)
- [associateUuid](PurchaseOrderContact.md#associateuuid)
- [entityUuid](PurchaseOrderContact.md#entityuuid)
- [metadata](PurchaseOrderContact.md#metadata)
- [needApproval](PurchaseOrderContact.md#needapproval)
- [purchaseOrderId](PurchaseOrderContact.md#purchaseorderid)
- [userComment](PurchaseOrderContact.md#usercomment)
- [fields](PurchaseOrderContact.md#fields)
- [runtime](PurchaseOrderContact.md#runtime)
- [typeName](PurchaseOrderContact.md#typename)

### Methods

- [clone](PurchaseOrderContact.md#clone)
- [equals](PurchaseOrderContact.md#equals)
- [fromBinary](PurchaseOrderContact.md#frombinary)
- [fromJson](PurchaseOrderContact.md#fromjson)
- [fromJsonString](PurchaseOrderContact.md#fromjsonstring)
- [getType](PurchaseOrderContact.md#gettype)
- [toBinary](PurchaseOrderContact.md#tobinary)
- [toJSON](PurchaseOrderContact.md#tojson)
- [toJson](PurchaseOrderContact.md#tojson-1)
- [toJsonString](PurchaseOrderContact.md#tojsonstring)
- [equals](PurchaseOrderContact.md#equals-1)
- [fromBinary](PurchaseOrderContact.md#frombinary-1)
- [fromJson](PurchaseOrderContact.md#fromjson-1)
- [fromJsonString](PurchaseOrderContact.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseOrderContact**(`data?`): [`PurchaseOrderContact`](PurchaseOrderContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseOrderContact`](PurchaseOrderContact.md)\> |

#### Returns

[`PurchaseOrderContact`](PurchaseOrderContact.md)

#### Overrides

Message\&lt;PurchaseOrderContact\&gt;.constructor

#### Defined in

[src/purchases_orders.scailo_pb.ts:3844](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_orders.scailo_pb.ts#L3844)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/purchases_orders.scailo_pb.ts:3806](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_orders.scailo_pb.ts#L3806)

___

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

Stores the associate ID

**`Generated`**

from field: uint64 associate_id = 11;

#### Defined in

[src/purchases_orders.scailo_pb.ts:3835](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_orders.scailo_pb.ts#L3835)

___

### associateUuid

• **associateUuid**: `string` = `""`

Stores the UUID of the associate

**`Generated`**

from field: string associate_uuid = 211;

#### Defined in

[src/purchases_orders.scailo_pb.ts:3842](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_orders.scailo_pb.ts#L3842)

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

[src/purchases_orders.scailo_pb.ts:3790](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_orders.scailo_pb.ts#L3790)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/purchases_orders.scailo_pb.ts:3798](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_orders.scailo_pb.ts#L3798)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

The approval state of the record

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/purchases_orders.scailo_pb.ts:3814](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_orders.scailo_pb.ts#L3814)

___

### purchaseOrderId

• **purchaseOrderId**: `bigint` = `protoInt64.zero`

Stores the purchase order ID

**`Generated`**

from field: uint64 purchase_order_id = 10;

#### Defined in

[src/purchases_orders.scailo_pb.ts:3828](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_orders.scailo_pb.ts#L3828)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/purchases_orders.scailo_pb.ts:3821](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_orders.scailo_pb.ts#L3821)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_orders.scailo_pb.ts:3851](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_orders.scailo_pb.ts#L3851)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_orders.scailo_pb.ts:3849](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_orders.scailo_pb.ts#L3849)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseOrderContact"``

#### Defined in

[src/purchases_orders.scailo_pb.ts:3850](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_orders.scailo_pb.ts#L3850)

## Methods

### clone

▸ **clone**(): [`PurchaseOrderContact`](PurchaseOrderContact.md)

Create a deep copy.

#### Returns

[`PurchaseOrderContact`](PurchaseOrderContact.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseOrderContact`](PurchaseOrderContact.md) \| `PlainMessage`\<[`PurchaseOrderContact`](PurchaseOrderContact.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseOrderContact`](PurchaseOrderContact.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseOrderContact`](PurchaseOrderContact.md)\>

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
| `a` | `undefined` \| [`PurchaseOrderContact`](PurchaseOrderContact.md) \| `PlainMessage`\<[`PurchaseOrderContact`](PurchaseOrderContact.md)\> |
| `b` | `undefined` \| [`PurchaseOrderContact`](PurchaseOrderContact.md) \| `PlainMessage`\<[`PurchaseOrderContact`](PurchaseOrderContact.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_orders.scailo_pb.ts:3874](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_orders.scailo_pb.ts#L3874)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseOrderContact`](PurchaseOrderContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseOrderContact`](PurchaseOrderContact.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:3862](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_orders.scailo_pb.ts#L3862)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseOrderContact`](PurchaseOrderContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderContact`](PurchaseOrderContact.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:3866](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_orders.scailo_pb.ts#L3866)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseOrderContact`](PurchaseOrderContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderContact`](PurchaseOrderContact.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:3870](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_orders.scailo_pb.ts#L3870)
