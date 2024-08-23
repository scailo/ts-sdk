[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrderContact

# Class: SalesOrderContact

Describes the parameters that constitute a sales order contact

**`Generated`**

from message Scailo.SalesOrderContact

## Hierarchy

- `Message`\<[`SalesOrderContact`](SalesOrderContact.md)\>

  ↳ **`SalesOrderContact`**

## Table of contents

### Constructors

- [constructor](SalesOrderContact.md#constructor)

### Properties

- [approvalMetadata](SalesOrderContact.md#approvalmetadata)
- [associateId](SalesOrderContact.md#associateid)
- [entityUuid](SalesOrderContact.md#entityuuid)
- [metadata](SalesOrderContact.md#metadata)
- [needApproval](SalesOrderContact.md#needapproval)
- [salesOrderId](SalesOrderContact.md#salesorderid)
- [userComment](SalesOrderContact.md#usercomment)
- [fields](SalesOrderContact.md#fields)
- [runtime](SalesOrderContact.md#runtime)
- [typeName](SalesOrderContact.md#typename)

### Methods

- [clone](SalesOrderContact.md#clone)
- [equals](SalesOrderContact.md#equals)
- [fromBinary](SalesOrderContact.md#frombinary)
- [fromJson](SalesOrderContact.md#fromjson)
- [fromJsonString](SalesOrderContact.md#fromjsonstring)
- [getType](SalesOrderContact.md#gettype)
- [toBinary](SalesOrderContact.md#tobinary)
- [toJSON](SalesOrderContact.md#tojson)
- [toJson](SalesOrderContact.md#tojson-1)
- [toJsonString](SalesOrderContact.md#tojsonstring)
- [equals](SalesOrderContact.md#equals-1)
- [fromBinary](SalesOrderContact.md#frombinary-1)
- [fromJson](SalesOrderContact.md#fromjson-1)
- [fromJsonString](SalesOrderContact.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrderContact**(`data?`): [`SalesOrderContact`](SalesOrderContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrderContact`](SalesOrderContact.md)\> |

#### Returns

[`SalesOrderContact`](SalesOrderContact.md)

#### Overrides

Message\&lt;SalesOrderContact\&gt;.constructor

#### Defined in

src/sales_orders.scailo_pb.ts:3022

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/sales_orders.scailo_pb.ts:2992

___

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

Stores the associate ID

**`Generated`**

from field: uint64 associate_id = 11;

#### Defined in

src/sales_orders.scailo_pb.ts:3020

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/sales_orders.scailo_pb.ts:2978

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this sales order

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/sales_orders.scailo_pb.ts:2985

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/sales_orders.scailo_pb.ts:2999

___

### salesOrderId

• **salesOrderId**: `bigint` = `protoInt64.zero`

Stores the sales order ID

**`Generated`**

from field: uint64 sales_order_id = 10;

#### Defined in

src/sales_orders.scailo_pb.ts:3013

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/sales_orders.scailo_pb.ts:3006

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_orders.scailo_pb.ts:3029

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_orders.scailo_pb.ts:3027

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrderContact"``

#### Defined in

src/sales_orders.scailo_pb.ts:3028

## Methods

### clone

▸ **clone**(): [`SalesOrderContact`](SalesOrderContact.md)

Create a deep copy.

#### Returns

[`SalesOrderContact`](SalesOrderContact.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrderContact`](SalesOrderContact.md) \| `PlainMessage`\<[`SalesOrderContact`](SalesOrderContact.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrderContact`](SalesOrderContact.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrderContact`](SalesOrderContact.md)\>

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
| `a` | `undefined` \| [`SalesOrderContact`](SalesOrderContact.md) \| `PlainMessage`\<[`SalesOrderContact`](SalesOrderContact.md)\> |
| `b` | `undefined` \| [`SalesOrderContact`](SalesOrderContact.md) \| `PlainMessage`\<[`SalesOrderContact`](SalesOrderContact.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_orders.scailo_pb.ts:3051

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrderContact`](SalesOrderContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrderContact`](SalesOrderContact.md)

#### Defined in

src/sales_orders.scailo_pb.ts:3039

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrderContact`](SalesOrderContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderContact`](SalesOrderContact.md)

#### Defined in

src/sales_orders.scailo_pb.ts:3043

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrderContact`](SalesOrderContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderContact`](SalesOrderContact.md)

#### Defined in

src/sales_orders.scailo_pb.ts:3047
