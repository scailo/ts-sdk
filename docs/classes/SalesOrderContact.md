[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrderContact

# Class: SalesOrderContact

Represents the finalized state of a Sales Order Contact mapping.
This entity securely binds a designated associate (the client's point of contact)
to the parent order, tracking accountability, approval workflows, and providing
both internal IDs and unpredictable UUIDs for secure downstream referencing.

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
- [associateUuid](SalesOrderContact.md#associateuuid)
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

[src/sales_orders.scailo_pb.ts:5367](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5367)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_orders.scailo_pb.ts:5311](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5311)

___

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the associate acting as the point of contact.

**`Example`**

```ts
55
```

**`Generated`**

from field: uint64 associate_id = 11;

#### Defined in

[src/sales_orders.scailo_pb.ts:5353](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5353)

___

### associateUuid

• **associateUuid**: `string` = `""`

**`Description`**

The globally unique identifier (UUID) of the associate, used for secure external referencing without exposing sequential internal IDs.

**`Example`**

```ts
"661f9511-f39c-42d5-b827-557766551111"
```

**`Format`**

Valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string associate_uuid = 211;

#### Defined in

[src/sales_orders.scailo_pb.ts:5365](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5365)

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

[src/sales_orders.scailo_pb.ts:5295](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5295)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_orders.scailo_pb.ts:5303](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5303)

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

[src/sales_orders.scailo_pb.ts:5323](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5323)

___

### salesOrderId

• **salesOrderId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the parent sales order to which this contact belongs.

**`Example`**

```ts
1024
```

**`Generated`**

from field: uint64 sales_order_id = 10;

#### Defined in

[src/sales_orders.scailo_pb.ts:5343](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5343)

___

### userComment

• **userComment**: `string` = `""`

**`Description`**

Audit log comment or justification captured during the last modification or transactional operation.

**`Example`**

```ts
"Assigned primary warehouse manager as the main contact."
```

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/sales_orders.scailo_pb.ts:5333](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5333)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:5374](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5374)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:5372](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5372)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrderContact"``

#### Defined in

[src/sales_orders.scailo_pb.ts:5373](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5373)

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

[src/sales_orders.scailo_pb.ts:5397](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5397)

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

[src/sales_orders.scailo_pb.ts:5385](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5385)

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

[src/sales_orders.scailo_pb.ts:5389](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5389)

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

[src/sales_orders.scailo_pb.ts:5393](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5393)
