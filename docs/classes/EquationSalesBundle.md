[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationSalesBundle

# Class: EquationSalesBundle

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.EquationSalesBundle

## Hierarchy

- `Message`\<[`EquationSalesBundle`](EquationSalesBundle.md)\>

  ↳ **`EquationSalesBundle`**

## Table of contents

### Constructors

- [constructor](EquationSalesBundle.md#constructor)

### Properties

- [approvalMetadata](EquationSalesBundle.md#approvalmetadata)
- [completedOn](EquationSalesBundle.md#completedon)
- [description](EquationSalesBundle.md#description)
- [entityUuid](EquationSalesBundle.md#entityuuid)
- [familyId](EquationSalesBundle.md#familyid)
- [list](EquationSalesBundle.md#list)
- [logs](EquationSalesBundle.md#logs)
- [metadata](EquationSalesBundle.md#metadata)
- [name](EquationSalesBundle.md#name)
- [status](EquationSalesBundle.md#status)
- [totalPrice](EquationSalesBundle.md#totalprice)
- [vaultFolderId](EquationSalesBundle.md#vaultfolderid)
- [fields](EquationSalesBundle.md#fields)
- [runtime](EquationSalesBundle.md#runtime)
- [typeName](EquationSalesBundle.md#typename)

### Methods

- [clone](EquationSalesBundle.md#clone)
- [equals](EquationSalesBundle.md#equals)
- [fromBinary](EquationSalesBundle.md#frombinary)
- [fromJson](EquationSalesBundle.md#fromjson)
- [fromJsonString](EquationSalesBundle.md#fromjsonstring)
- [getType](EquationSalesBundle.md#gettype)
- [toBinary](EquationSalesBundle.md#tobinary)
- [toJSON](EquationSalesBundle.md#tojson)
- [toJson](EquationSalesBundle.md#tojson-1)
- [toJsonString](EquationSalesBundle.md#tojsonstring)
- [equals](EquationSalesBundle.md#equals-1)
- [fromBinary](EquationSalesBundle.md#frombinary-1)
- [fromJson](EquationSalesBundle.md#fromjson-1)
- [fromJsonString](EquationSalesBundle.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationSalesBundle**(`data?`): [`EquationSalesBundle`](EquationSalesBundle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationSalesBundle`](EquationSalesBundle.md)\> |

#### Returns

[`EquationSalesBundle`](EquationSalesBundle.md)

#### Overrides

Message\&lt;EquationSalesBundle\&gt;.constructor

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:511](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_sales_bundles.scailo_pb.ts#L511)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:438](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_sales_bundles.scailo_pb.ts#L438)

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

[src/equations_sales_bundles.scailo_pb.ts:464](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_sales_bundles.scailo_pb.ts#L464)

___

### description

• **description**: `string` = `""`

The description of the equation sales bundle

**`Generated`**

from field: string description = 13;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:495](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_sales_bundles.scailo_pb.ts#L495)

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

[src/equations_sales_bundles.scailo_pb.ts:422](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_sales_bundles.scailo_pb.ts#L422)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family that this equation belongs to

**`Generated`**

from field: uint64 family_id = 12;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:488](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_sales_bundles.scailo_pb.ts#L488)

___

### list

• **list**: [`EquationSalesBundleItem`](EquationSalesBundleItem.md)[] = `[]`

The list of associated equation sales bundle items

**`Generated`**

from field: repeated Scailo.EquationSalesBundleItem list = 20;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:502](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_sales_bundles.scailo_pb.ts#L502)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:454](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_sales_bundles.scailo_pb.ts#L454)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:430](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_sales_bundles.scailo_pb.ts#L430)

___

### name

• **name**: `string` = `""`

The name of the equation sales bundle

**`Generated`**

from field: string name = 10;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:481](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_sales_bundles.scailo_pb.ts#L481)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:446](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_sales_bundles.scailo_pb.ts#L446)

___

### totalPrice

• **totalPrice**: `number` = `0`

The total price of the equation sales bundle

**`Generated`**

from field: double total_price = 40;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:509](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_sales_bundles.scailo_pb.ts#L509)

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

[src/equations_sales_bundles.scailo_pb.ts:474](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_sales_bundles.scailo_pb.ts#L474)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:518](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_sales_bundles.scailo_pb.ts#L518)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:516](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_sales_bundles.scailo_pb.ts#L516)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationSalesBundle"``

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:517](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_sales_bundles.scailo_pb.ts#L517)

## Methods

### clone

▸ **clone**(): [`EquationSalesBundle`](EquationSalesBundle.md)

Create a deep copy.

#### Returns

[`EquationSalesBundle`](EquationSalesBundle.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationSalesBundle`](EquationSalesBundle.md) \| `PlainMessage`\<[`EquationSalesBundle`](EquationSalesBundle.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationSalesBundle`](EquationSalesBundle.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationSalesBundle`](EquationSalesBundle.md)\>

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
| `a` | `undefined` \| [`EquationSalesBundle`](EquationSalesBundle.md) \| `PlainMessage`\<[`EquationSalesBundle`](EquationSalesBundle.md)\> |
| `b` | `undefined` \| [`EquationSalesBundle`](EquationSalesBundle.md) \| `PlainMessage`\<[`EquationSalesBundle`](EquationSalesBundle.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:545](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_sales_bundles.scailo_pb.ts#L545)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationSalesBundle`](EquationSalesBundle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationSalesBundle`](EquationSalesBundle.md)

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:533](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_sales_bundles.scailo_pb.ts#L533)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationSalesBundle`](EquationSalesBundle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationSalesBundle`](EquationSalesBundle.md)

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:537](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_sales_bundles.scailo_pb.ts#L537)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationSalesBundle`](EquationSalesBundle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationSalesBundle`](EquationSalesBundle.md)

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:541](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_sales_bundles.scailo_pb.ts#L541)
