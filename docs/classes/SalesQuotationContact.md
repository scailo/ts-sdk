[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationContact

# Class: SalesQuotationContact

Represents the finalized state of a Sales Quotation Contact mapping.
This entity securely binds a designated associate (the client's point of contact)
to the parent quotation, tracking accountability, approval workflows, and providing
both internal IDs and unpredictable UUIDs for secure downstream referencing.

**`Generated`**

from message Scailo.SalesQuotationContact

## Hierarchy

- `Message`\<[`SalesQuotationContact`](SalesQuotationContact.md)\>

  ↳ **`SalesQuotationContact`**

## Table of contents

### Constructors

- [constructor](SalesQuotationContact.md#constructor)

### Properties

- [approvalMetadata](SalesQuotationContact.md#approvalmetadata)
- [associateId](SalesQuotationContact.md#associateid)
- [associateUuid](SalesQuotationContact.md#associateuuid)
- [entityUuid](SalesQuotationContact.md#entityuuid)
- [metadata](SalesQuotationContact.md#metadata)
- [needApproval](SalesQuotationContact.md#needapproval)
- [salesQuotationId](SalesQuotationContact.md#salesquotationid)
- [userComment](SalesQuotationContact.md#usercomment)
- [fields](SalesQuotationContact.md#fields)
- [runtime](SalesQuotationContact.md#runtime)
- [typeName](SalesQuotationContact.md#typename)

### Methods

- [clone](SalesQuotationContact.md#clone)
- [equals](SalesQuotationContact.md#equals)
- [fromBinary](SalesQuotationContact.md#frombinary)
- [fromJson](SalesQuotationContact.md#fromjson)
- [fromJsonString](SalesQuotationContact.md#fromjsonstring)
- [getType](SalesQuotationContact.md#gettype)
- [toBinary](SalesQuotationContact.md#tobinary)
- [toJSON](SalesQuotationContact.md#tojson)
- [toJson](SalesQuotationContact.md#tojson-1)
- [toJsonString](SalesQuotationContact.md#tojsonstring)
- [equals](SalesQuotationContact.md#equals-1)
- [fromBinary](SalesQuotationContact.md#frombinary-1)
- [fromJson](SalesQuotationContact.md#fromjson-1)
- [fromJsonString](SalesQuotationContact.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationContact**(`data?`): [`SalesQuotationContact`](SalesQuotationContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationContact`](SalesQuotationContact.md)\> |

#### Returns

[`SalesQuotationContact`](SalesQuotationContact.md)

#### Overrides

Message\&lt;SalesQuotationContact\&gt;.constructor

#### Defined in

[src/sales_quotations.scailo_pb.ts:4967](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4967)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4911](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4911)

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

[src/sales_quotations.scailo_pb.ts:4953](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4953)

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

[src/sales_quotations.scailo_pb.ts:4965](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4965)

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

[src/sales_quotations.scailo_pb.ts:4895](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4895)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4903](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4903)

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

[src/sales_quotations.scailo_pb.ts:4923](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4923)

___

### salesQuotationId

• **salesQuotationId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the parent sales quotation to which this contact belongs.

**`Example`**

```ts
1024
```

**`Generated`**

from field: uint64 sales_quotation_id = 10;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4943](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4943)

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

[src/sales_quotations.scailo_pb.ts:4933](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4933)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:4974](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4974)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:4972](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4972)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationContact"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:4973](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4973)

## Methods

### clone

▸ **clone**(): [`SalesQuotationContact`](SalesQuotationContact.md)

Create a deep copy.

#### Returns

[`SalesQuotationContact`](SalesQuotationContact.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationContact`](SalesQuotationContact.md) \| `PlainMessage`\<[`SalesQuotationContact`](SalesQuotationContact.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationContact`](SalesQuotationContact.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationContact`](SalesQuotationContact.md)\>

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
| `a` | `undefined` \| [`SalesQuotationContact`](SalesQuotationContact.md) \| `PlainMessage`\<[`SalesQuotationContact`](SalesQuotationContact.md)\> |
| `b` | `undefined` \| [`SalesQuotationContact`](SalesQuotationContact.md) \| `PlainMessage`\<[`SalesQuotationContact`](SalesQuotationContact.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_quotations.scailo_pb.ts:4997](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4997)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationContact`](SalesQuotationContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationContact`](SalesQuotationContact.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:4985](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4985)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationContact`](SalesQuotationContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationContact`](SalesQuotationContact.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:4989](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4989)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationContact`](SalesQuotationContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationContact`](SalesQuotationContact.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:4993](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4993)
