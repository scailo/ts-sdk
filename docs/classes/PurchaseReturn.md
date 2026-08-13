[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseReturn

# Class: PurchaseReturn

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.PurchaseReturn

## Hierarchy

- `Message`\<[`PurchaseReturn`](PurchaseReturn.md)\>

  ↳ **`PurchaseReturn`**

## Table of contents

### Constructors

- [constructor](PurchaseReturn.md#constructor)

### Properties

- [approvalMetadata](PurchaseReturn.md#approvalmetadata)
- [completedOn](PurchaseReturn.md#completedon)
- [entityUuid](PurchaseReturn.md#entityuuid)
- [finalRefNumber](PurchaseReturn.md#finalrefnumber)
- [formData](PurchaseReturn.md#formdata)
- [list](PurchaseReturn.md#list)
- [locationId](PurchaseReturn.md#locationid)
- [logs](PurchaseReturn.md#logs)
- [metadata](PurchaseReturn.md#metadata)
- [refFrom](PurchaseReturn.md#reffrom)
- [refId](PurchaseReturn.md#refid)
- [referenceId](PurchaseReturn.md#referenceid)
- [status](PurchaseReturn.md#status)
- [vaultFolderId](PurchaseReturn.md#vaultfolderid)
- [fields](PurchaseReturn.md#fields)
- [runtime](PurchaseReturn.md#runtime)
- [typeName](PurchaseReturn.md#typename)

### Methods

- [clone](PurchaseReturn.md#clone)
- [equals](PurchaseReturn.md#equals)
- [fromBinary](PurchaseReturn.md#frombinary)
- [fromJson](PurchaseReturn.md#fromjson)
- [fromJsonString](PurchaseReturn.md#fromjsonstring)
- [getType](PurchaseReturn.md#gettype)
- [toBinary](PurchaseReturn.md#tobinary)
- [toJSON](PurchaseReturn.md#tojson)
- [toJson](PurchaseReturn.md#tojson-1)
- [toJsonString](PurchaseReturn.md#tojsonstring)
- [equals](PurchaseReturn.md#equals-1)
- [fromBinary](PurchaseReturn.md#frombinary-1)
- [fromJson](PurchaseReturn.md#fromjson-1)
- [fromJsonString](PurchaseReturn.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseReturn**(`data?`): [`PurchaseReturn`](PurchaseReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseReturn`](PurchaseReturn.md)\> |

#### Returns

[`PurchaseReturn`](PurchaseReturn.md)

#### Overrides

Message\&lt;PurchaseReturn\&gt;.constructor

#### Defined in

[src/purchases_returns.scailo_pb.ts:728](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L728)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/purchases_returns.scailo_pb.ts:634](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L634)

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

[src/purchases_returns.scailo_pb.ts:660](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L660)

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

[src/purchases_returns.scailo_pb.ts:618](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L618)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

**`Description`**

The system-generated immutable reference number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/purchases_returns.scailo_pb.ts:690](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L690)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/purchases_returns.scailo_pb.ts:726](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L726)

___

### list

• **list**: [`PurchaseReturnItem`](PurchaseReturnItem.md)[] = `[]`

The list of associated purchase return items

**`Generated`**

from field: repeated Scailo.PurchaseReturnItem list = 20;

#### Defined in

[src/purchases_returns.scailo_pb.ts:718](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L718)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

[src/purchases_returns.scailo_pb.ts:711](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L711)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/purchases_returns.scailo_pb.ts:650](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L650)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/purchases_returns.scailo_pb.ts:626](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L626)

___

### refFrom

• **refFrom**: [`PURCHASE_RETURN_REF_FROM`](../enums/PURCHASE_RETURN_REF_FROM.md) = `PURCHASE_RETURN_REF_FROM.PURCHASE_RETURN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.PURCHASE_RETURN_REF_FROM ref_from = 12;

#### Defined in

[src/purchases_returns.scailo_pb.ts:697](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L697)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/purchases_returns.scailo_pb.ts:704](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L704)

___

### referenceId

• **referenceId**: `string` = `""`

**`Description`**

The user-provided reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/purchases_returns.scailo_pb.ts:680](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L680)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/purchases_returns.scailo_pb.ts:642](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L642)

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

[src/purchases_returns.scailo_pb.ts:670](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L670)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_returns.scailo_pb.ts:735](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L735)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_returns.scailo_pb.ts:733](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L733)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseReturn"``

#### Defined in

[src/purchases_returns.scailo_pb.ts:734](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L734)

## Methods

### clone

▸ **clone**(): [`PurchaseReturn`](PurchaseReturn.md)

Create a deep copy.

#### Returns

[`PurchaseReturn`](PurchaseReturn.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseReturn`](PurchaseReturn.md) \| `PlainMessage`\<[`PurchaseReturn`](PurchaseReturn.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseReturn`](PurchaseReturn.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseReturn`](PurchaseReturn.md)\>

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
| `a` | `undefined` \| [`PurchaseReturn`](PurchaseReturn.md) \| `PlainMessage`\<[`PurchaseReturn`](PurchaseReturn.md)\> |
| `b` | `undefined` \| [`PurchaseReturn`](PurchaseReturn.md) \| `PlainMessage`\<[`PurchaseReturn`](PurchaseReturn.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_returns.scailo_pb.ts:764](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L764)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseReturn`](PurchaseReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseReturn`](PurchaseReturn.md)

#### Defined in

[src/purchases_returns.scailo_pb.ts:752](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L752)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseReturn`](PurchaseReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseReturn`](PurchaseReturn.md)

#### Defined in

[src/purchases_returns.scailo_pb.ts:756](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L756)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseReturn`](PurchaseReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseReturn`](PurchaseReturn.md)

#### Defined in

[src/purchases_returns.scailo_pb.ts:760](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/purchases_returns.scailo_pb.ts#L760)
