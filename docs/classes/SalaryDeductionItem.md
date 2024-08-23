[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalaryDeductionItem

# Class: SalaryDeductionItem

Describes the parameters that constitute an deduction item associated to a salary

**`Generated`**

from message Scailo.SalaryDeductionItem

## Hierarchy

- `Message`\<[`SalaryDeductionItem`](SalaryDeductionItem.md)\>

  ↳ **`SalaryDeductionItem`**

## Table of contents

### Constructors

- [constructor](SalaryDeductionItem.md#constructor)

### Properties

- [approvalMetadata](SalaryDeductionItem.md#approvalmetadata)
- [entityUuid](SalaryDeductionItem.md#entityuuid)
- [metadata](SalaryDeductionItem.md#metadata)
- [needApproval](SalaryDeductionItem.md#needapproval)
- [quantity](SalaryDeductionItem.md#quantity)
- [refFrom](SalaryDeductionItem.md#reffrom)
- [refId](SalaryDeductionItem.md#refid)
- [salaryId](SalaryDeductionItem.md#salaryid)
- [userComment](SalaryDeductionItem.md#usercomment)
- [fields](SalaryDeductionItem.md#fields)
- [runtime](SalaryDeductionItem.md#runtime)
- [typeName](SalaryDeductionItem.md#typename)

### Methods

- [clone](SalaryDeductionItem.md#clone)
- [equals](SalaryDeductionItem.md#equals)
- [fromBinary](SalaryDeductionItem.md#frombinary)
- [fromJson](SalaryDeductionItem.md#fromjson)
- [fromJsonString](SalaryDeductionItem.md#fromjsonstring)
- [getType](SalaryDeductionItem.md#gettype)
- [toBinary](SalaryDeductionItem.md#tobinary)
- [toJSON](SalaryDeductionItem.md#tojson)
- [toJson](SalaryDeductionItem.md#tojson-1)
- [toJsonString](SalaryDeductionItem.md#tojsonstring)
- [equals](SalaryDeductionItem.md#equals-1)
- [fromBinary](SalaryDeductionItem.md#frombinary-1)
- [fromJson](SalaryDeductionItem.md#fromjson-1)
- [fromJsonString](SalaryDeductionItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalaryDeductionItem**(`data?`): [`SalaryDeductionItem`](SalaryDeductionItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalaryDeductionItem`](SalaryDeductionItem.md)\> |

#### Returns

[`SalaryDeductionItem`](SalaryDeductionItem.md)

#### Overrides

Message\&lt;SalaryDeductionItem\&gt;.constructor

#### Defined in

src/salaries.scailo_pb.ts:1470

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/salaries.scailo_pb.ts:1426

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/salaries.scailo_pb.ts:1412

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this salary

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/salaries.scailo_pb.ts:1419

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/salaries.scailo_pb.ts:1433

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The total quantity of this item (in cents)

**`Generated`**

from field: int64 quantity = 13;

#### Defined in

src/salaries.scailo_pb.ts:1468

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 11;

#### Defined in

src/salaries.scailo_pb.ts:1454

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 12;

#### Defined in

src/salaries.scailo_pb.ts:1461

___

### salaryId

• **salaryId**: `bigint` = `protoInt64.zero`

Stores the salary ID

**`Generated`**

from field: int64 salary_id = 10;

#### Defined in

src/salaries.scailo_pb.ts:1447

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/salaries.scailo_pb.ts:1440

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/salaries.scailo_pb.ts:1477

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/salaries.scailo_pb.ts:1475

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalaryDeductionItem"``

#### Defined in

src/salaries.scailo_pb.ts:1476

## Methods

### clone

▸ **clone**(): [`SalaryDeductionItem`](SalaryDeductionItem.md)

Create a deep copy.

#### Returns

[`SalaryDeductionItem`](SalaryDeductionItem.md)

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
| `other` | `undefined` \| ``null`` \| [`SalaryDeductionItem`](SalaryDeductionItem.md) \| `PlainMessage`\<[`SalaryDeductionItem`](SalaryDeductionItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalaryDeductionItem`](SalaryDeductionItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalaryDeductionItem`](SalaryDeductionItem.md)\>

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
| `a` | `undefined` \| [`SalaryDeductionItem`](SalaryDeductionItem.md) \| `PlainMessage`\<[`SalaryDeductionItem`](SalaryDeductionItem.md)\> |
| `b` | `undefined` \| [`SalaryDeductionItem`](SalaryDeductionItem.md) \| `PlainMessage`\<[`SalaryDeductionItem`](SalaryDeductionItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/salaries.scailo_pb.ts:1501

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalaryDeductionItem`](SalaryDeductionItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalaryDeductionItem`](SalaryDeductionItem.md)

#### Defined in

src/salaries.scailo_pb.ts:1489

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalaryDeductionItem`](SalaryDeductionItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalaryDeductionItem`](SalaryDeductionItem.md)

#### Defined in

src/salaries.scailo_pb.ts:1493

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalaryDeductionItem`](SalaryDeductionItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalaryDeductionItem`](SalaryDeductionItem.md)

#### Defined in

src/salaries.scailo_pb.ts:1497
