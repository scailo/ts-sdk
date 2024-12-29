[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationWorkOrderItem

# Class: EquationWorkOrderItem

Describes the parameters that constitute an item associated to a equation work order

**`Generated`**

from message Scailo.EquationWorkOrderItem

## Hierarchy

- `Message`\<[`EquationWorkOrderItem`](EquationWorkOrderItem.md)\>

  ↳ **`EquationWorkOrderItem`**

## Table of contents

### Constructors

- [constructor](EquationWorkOrderItem.md#constructor)

### Properties

- [approvalMetadata](EquationWorkOrderItem.md#approvalmetadata)
- [entityUuid](EquationWorkOrderItem.md#entityuuid)
- [equationId](EquationWorkOrderItem.md#equationid)
- [familyId](EquationWorkOrderItem.md#familyid)
- [metadata](EquationWorkOrderItem.md#metadata)
- [needApproval](EquationWorkOrderItem.md#needapproval)
- [quantity](EquationWorkOrderItem.md#quantity)
- [specifications](EquationWorkOrderItem.md#specifications)
- [unitPrice](EquationWorkOrderItem.md#unitprice)
- [userComment](EquationWorkOrderItem.md#usercomment)
- [fields](EquationWorkOrderItem.md#fields)
- [runtime](EquationWorkOrderItem.md#runtime)
- [typeName](EquationWorkOrderItem.md#typename)

### Methods

- [clone](EquationWorkOrderItem.md#clone)
- [equals](EquationWorkOrderItem.md#equals)
- [fromBinary](EquationWorkOrderItem.md#frombinary)
- [fromJson](EquationWorkOrderItem.md#fromjson)
- [fromJsonString](EquationWorkOrderItem.md#fromjsonstring)
- [getType](EquationWorkOrderItem.md#gettype)
- [toBinary](EquationWorkOrderItem.md#tobinary)
- [toJSON](EquationWorkOrderItem.md#tojson)
- [toJson](EquationWorkOrderItem.md#tojson-1)
- [toJsonString](EquationWorkOrderItem.md#tojsonstring)
- [equals](EquationWorkOrderItem.md#equals-1)
- [fromBinary](EquationWorkOrderItem.md#frombinary-1)
- [fromJson](EquationWorkOrderItem.md#fromjson-1)
- [fromJsonString](EquationWorkOrderItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationWorkOrderItem**(`data?`): [`EquationWorkOrderItem`](EquationWorkOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationWorkOrderItem`](EquationWorkOrderItem.md)\> |

#### Returns

[`EquationWorkOrderItem`](EquationWorkOrderItem.md)

#### Overrides

Message\&lt;EquationWorkOrderItem\&gt;.constructor

#### Defined in

src/equations_work_orders.scailo_pb.ts:754

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/equations_work_orders.scailo_pb.ts:703

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/equations_work_orders.scailo_pb.ts:689

___

### equationId

• **equationId**: `bigint` = `protoInt64.zero`

Stores the ID of the equation work order

**`Generated`**

from field: uint64 equation_id = 10;

#### Defined in

src/equations_work_orders.scailo_pb.ts:724

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family that the equation depends upon

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/equations_work_orders.scailo_pb.ts:731

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this equation work order

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/equations_work_orders.scailo_pb.ts:696

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/equations_work_orders.scailo_pb.ts:710

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity of the associated family to be used as the multiplier

**`Generated`**

from field: uint64 quantity = 12;

#### Defined in

src/equations_work_orders.scailo_pb.ts:738

___

### specifications

• **specifications**: `string` = `""`

The optional specifications

**`Generated`**

from field: string specifications = 14;

#### Defined in

src/equations_work_orders.scailo_pb.ts:752

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The optional unit price of this family

**`Generated`**

from field: uint64 unit_price = 13;

#### Defined in

src/equations_work_orders.scailo_pb.ts:745

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/equations_work_orders.scailo_pb.ts:717

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/equations_work_orders.scailo_pb.ts:761

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/equations_work_orders.scailo_pb.ts:759

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationWorkOrderItem"``

#### Defined in

src/equations_work_orders.scailo_pb.ts:760

## Methods

### clone

▸ **clone**(): [`EquationWorkOrderItem`](EquationWorkOrderItem.md)

Create a deep copy.

#### Returns

[`EquationWorkOrderItem`](EquationWorkOrderItem.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationWorkOrderItem`](EquationWorkOrderItem.md) \| `PlainMessage`\<[`EquationWorkOrderItem`](EquationWorkOrderItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationWorkOrderItem`](EquationWorkOrderItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationWorkOrderItem`](EquationWorkOrderItem.md)\>

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
| `a` | `undefined` \| [`EquationWorkOrderItem`](EquationWorkOrderItem.md) \| `PlainMessage`\<[`EquationWorkOrderItem`](EquationWorkOrderItem.md)\> |
| `b` | `undefined` \| [`EquationWorkOrderItem`](EquationWorkOrderItem.md) \| `PlainMessage`\<[`EquationWorkOrderItem`](EquationWorkOrderItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/equations_work_orders.scailo_pb.ts:786

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationWorkOrderItem`](EquationWorkOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationWorkOrderItem`](EquationWorkOrderItem.md)

#### Defined in

src/equations_work_orders.scailo_pb.ts:774

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationWorkOrderItem`](EquationWorkOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationWorkOrderItem`](EquationWorkOrderItem.md)

#### Defined in

src/equations_work_orders.scailo_pb.ts:778

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationWorkOrderItem`](EquationWorkOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationWorkOrderItem`](EquationWorkOrderItem.md)

#### Defined in

src/equations_work_orders.scailo_pb.ts:782
