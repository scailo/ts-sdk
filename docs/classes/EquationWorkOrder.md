[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationWorkOrder

# Class: EquationWorkOrder

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.EquationWorkOrder

## Hierarchy

- `Message`\<[`EquationWorkOrder`](EquationWorkOrder.md)\>

  ↳ **`EquationWorkOrder`**

## Table of contents

### Constructors

- [constructor](EquationWorkOrder.md#constructor)

### Properties

- [amendmentCount](EquationWorkOrder.md#amendmentcount)
- [approvalMetadata](EquationWorkOrder.md#approvalmetadata)
- [completedOn](EquationWorkOrder.md#completedon)
- [description](EquationWorkOrder.md#description)
- [entityUuid](EquationWorkOrder.md#entityuuid)
- [list](EquationWorkOrder.md#list)
- [logs](EquationWorkOrder.md#logs)
- [metadata](EquationWorkOrder.md#metadata)
- [name](EquationWorkOrder.md#name)
- [status](EquationWorkOrder.md#status)
- [totalPrice](EquationWorkOrder.md#totalprice)
- [vaultFolderId](EquationWorkOrder.md#vaultfolderid)
- [workOrderId](EquationWorkOrder.md#workorderid)
- [fields](EquationWorkOrder.md#fields)
- [runtime](EquationWorkOrder.md#runtime)
- [typeName](EquationWorkOrder.md#typename)

### Methods

- [clone](EquationWorkOrder.md#clone)
- [equals](EquationWorkOrder.md#equals)
- [fromBinary](EquationWorkOrder.md#frombinary)
- [fromJson](EquationWorkOrder.md#fromjson)
- [fromJsonString](EquationWorkOrder.md#fromjsonstring)
- [getType](EquationWorkOrder.md#gettype)
- [toBinary](EquationWorkOrder.md#tobinary)
- [toJSON](EquationWorkOrder.md#tojson)
- [toJson](EquationWorkOrder.md#tojson-1)
- [toJsonString](EquationWorkOrder.md#tojsonstring)
- [equals](EquationWorkOrder.md#equals-1)
- [fromBinary](EquationWorkOrder.md#frombinary-1)
- [fromJson](EquationWorkOrder.md#fromjson-1)
- [fromJsonString](EquationWorkOrder.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationWorkOrder**(`data?`): [`EquationWorkOrder`](EquationWorkOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationWorkOrder`](EquationWorkOrder.md)\> |

#### Returns

[`EquationWorkOrder`](EquationWorkOrder.md)

#### Overrides

Message\&lt;EquationWorkOrder\&gt;.constructor

#### Defined in

[src/equations_work_orders.scailo_pb.ts:526](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L526)

## Properties

### amendmentCount

• **amendmentCount**: `bigint` = `protoInt64.zero`

The number of times that the equation work order has been amended

**`Generated`**

from field: uint64 amendment_count = 70;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:524](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L524)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:446](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L446)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

**`Description`**

UNIX timestamp of when the record transitioned to the COMPLETED state.

**`Example`**

```ts
1698400000
```

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:472](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L472)

___

### description

• **description**: `string` = `""`

The description of the equation work order

**`Generated`**

from field: string description = 13;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:503](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L503)

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

[src/equations_work_orders.scailo_pb.ts:430](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L430)

___

### list

• **list**: [`EquationWorkOrderItem`](EquationWorkOrderItem.md)[] = `[]`

The list of associated equation work order items

**`Generated`**

from field: repeated Scailo.EquationWorkOrderItem list = 20;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:510](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L510)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:462](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L462)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:438](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L438)

___

### name

• **name**: `string` = `""`

The name of the equation work order

**`Generated`**

from field: string name = 10;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:489](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L489)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:454](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L454)

___

### totalPrice

• **totalPrice**: `number` = `0`

The total price of the equation work order

**`Generated`**

from field: double total_price = 40;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:517](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L517)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Description`**

Link to the document storage folder.

**`Example`**

```ts
15234
```

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:482](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L482)

___

### workOrderId

• **workOrderId**: `bigint` = `protoInt64.zero`

The ID of the work order that this equation belongs to

**`Generated`**

from field: uint64 work_order_id = 12;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:496](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L496)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:533](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L533)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:531](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L531)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationWorkOrder"``

#### Defined in

[src/equations_work_orders.scailo_pb.ts:532](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L532)

## Methods

### clone

▸ **clone**(): [`EquationWorkOrder`](EquationWorkOrder.md)

Create a deep copy.

#### Returns

[`EquationWorkOrder`](EquationWorkOrder.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationWorkOrder`](EquationWorkOrder.md) \| `PlainMessage`\<[`EquationWorkOrder`](EquationWorkOrder.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationWorkOrder`](EquationWorkOrder.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationWorkOrder`](EquationWorkOrder.md)\>

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
| `a` | `undefined` \| [`EquationWorkOrder`](EquationWorkOrder.md) \| `PlainMessage`\<[`EquationWorkOrder`](EquationWorkOrder.md)\> |
| `b` | `undefined` \| [`EquationWorkOrder`](EquationWorkOrder.md) \| `PlainMessage`\<[`EquationWorkOrder`](EquationWorkOrder.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:561](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L561)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationWorkOrder`](EquationWorkOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationWorkOrder`](EquationWorkOrder.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:549](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L549)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationWorkOrder`](EquationWorkOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationWorkOrder`](EquationWorkOrder.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:553](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L553)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationWorkOrder`](EquationWorkOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationWorkOrder`](EquationWorkOrder.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:557](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L557)
